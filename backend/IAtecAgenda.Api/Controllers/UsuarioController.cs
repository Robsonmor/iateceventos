using IAtecAgenda.Api.Extensions;
using IAtecAgenda.Api.Infrastructure;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Domain.Contracts.Requests.Usuario;
using IAtecAgenda.Domain.Contracts.Responses;
using IAtecAgenda.Domain.Contracts.Responses.Usuario;
using IAtecAgenda.Domain.Contracts.Schemas.Usuario;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Enumerations;
using IAtecAgenda.Domain.Interfaces.Business;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static IAtecAgenda.Domain.Contracts.Responses.ErrorResponse;

namespace IAtecAgenda.Api.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    [Produces("application/json")]
    [Authorize(IdentityServerApiConstants.ResourceName)]
    [Route("api/v{version:apiVersion}/usuarios")]
    [OpenApiTag("Usuario", Description = "Controle dos Usuários")]
    public sealed class UsuarioController : BaseController
    {
        #region Private Read-Only Fields  
        
        private readonly UserManager<Usuario> _userManager;     
        private readonly IOperacaoGrupoService _operacaoGrupoService;

        #endregion

        #region Constructors

        public UsuarioController(IUnitOfWork unitOfWork, ILogger<UsuarioController> logger, IMemoryCache memoryCache
            , UserManager<Usuario> userManager         
            , IOperacaoGrupoService operacaoGrupoService
        )
            : base(unitOfWork, logger, memoryCache)
        {
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _operacaoGrupoService = operacaoGrupoService ?? throw new ArgumentNullException(nameof(operacaoGrupoService));

        }

        #endregion

        #region Controller Actions

        /// <summary>
        /// Retorna uma entidade
        /// </summary>
        /// <param name="userId">Código do Usuário</param>
        /// <returns>Retorno da Entidade</returns>
        [HttpGet("{userId:guid}")]
        [ProducesResponseType(typeof(GetUsuarioResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> Get([FromRoute]string userId)
        {
            var user = await Find(userId);
            if (user == null)
                return NotFound("O recurso solicitado não foi localizado.");

            var output = user.ConvertEntityToSchema<UsuarioSchema>();
            output.BUs = await FillBUs(user);
            
            return Ok(new GetUsuarioResponse()
            {
                Data = output
            });
        }

        /// <summary>
        /// Retorna uma lista da entidade
        /// </summary>
        /// <param name="request">Objeto com os parametros para retorno da entidade</param>
        /// <returns>Retorna lista de Usuários</returns>
        [HttpGet]
        [ProducesResponseType(typeof(FindAllUsuarioResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> FindAll([FromQuery]FindAllUsuarioRequest request)
        {
            var response = await SearchAll(request);

            return Ok(response);
        }       

        /// <summary>
        /// Atualização do registro de status
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Entidade com os dados atualizados</returns>
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> Update(UpdateUsuarioRequest request)
        {
            var existing = await Find(request.Id);

            var validError = Validate(request, existing);
            if (validError != null)
                return BadRequest(validError);

            // atualiza os dados do usuário
            existing.Email = request.Email;
            existing.StatusId = request.StatusId;
            
            // remove as roles pré-existentes e cadastra as novas
            existing.Roles.RemoveAll(x => x.UserId.Equals(request.Id));
            existing.Roles.Add(new IdentityUserRole<string>()
            {
                RoleId = request.PerfilId,
                UserId = request.Id
            });

            // remove as BUs pré-existentes e cadastra as novas
            var claims = await _userManager.GetClaimsAsync(existing);
            if (claims != null && claims.Any(x => x.Type.Equals(IdentityServerApiConstants.StandardClaims.BusinessUnit)))
                await _userManager.RemoveClaimsAsync(existing, claims.Where(x => x.Type.Equals(IdentityServerApiConstants.StandardClaims.BusinessUnit)));

            foreach (var item in request.BUs)
            {
                existing.Claims.Add(new IdentityUserClaim<string>()
                {
                    UserId = request.Id,
                    ClaimType = IdentityServerApiConstants.StandardClaims.BusinessUnit,
                    ClaimValue = item.ToString()
                });
            }

            await _userManager.UpdateAsync(existing);

            return NoContent();
        }           

        #endregion

        #region Private Methods

        /// <summary>
        /// Método que carrega as BUs associadas ao usuário
        /// </summary>
        /// <param name="entity">Instância do usuário pesquisado</param>
        /// <returns>Retorna a coleção de BUs associados ao usuário</returns>
        private async Task<IEnumerable<BusinessUnitSchema>> FillBUs(Usuario entity)
        {
            var bus = await _operacaoGrupoService.GetAll();
            var claims = entity.Claims
                .Where(p => p.ClaimType.Equals(IdentityServerApiConstants.StandardClaims.BusinessUnit))
                .Select(x => x.ClaimValue)
                .ToArray();

            return bus.Select(x => new BusinessUnitSchema
            {
                Id = x.Id,
                Nome = x.Nome,
                Checked = claims.Any(p => p.Equals(x.Id.ToString(), StringComparison.InvariantCultureIgnoreCase))
            }).OrderBy(x => x.Nome);
        }     

        /// <summary>
        /// Colocar este método em um serviço
        /// </summary>
        /// <param name="request">Objeto com filtro das pesquisas</param>
        /// <returns></returns>
        private async Task<FindAllUsuarioResponse> SearchAll(FindAllUsuarioRequest request)
        {
            var collection = _userManager.Users
                .Where(x =>
                    (x.Name.Contains(request.Nome ?? string.Empty) || x.Surname.Contains(request.Nome ?? string.Empty))
                );

            // SOMENTE QUEM TEM PERMISSÃO COMO ADMINISTRADOR POR FAZER ALTERAÇÃO EM USUÁRIOS ADMINS
            var perfil = User.GetRoles().FirstOrDefault();
            if (perfil != EnumPerfil.Sistema.ToDescription()  && perfil != EnumPerfil.Administrador.ToDescription())
                collection = collection.Where(x => !x.Roles.Any(y=> y.RoleId == ((int)EnumPerfil.Administrador).ToString() || y.RoleId == ((int)EnumPerfil.Sistema).ToString()));


            var length = await collection.CountAsync();

            var paginated = await collection
                .Include(x => x.Roles)
                .OrderBy(x => x.Name)
                .Skip(request.PageSize * (request.PageIndex - 1))
                .Take(request.PageSize)
                .ToListAsync();

            var schemaCollection = paginated.ConvertEntityToSchema<UsuarioSchema>();

            return new FindAllUsuarioResponse(request.PageIndex, request.PageSize, length, schemaCollection);
        }

        /// <summary>
        /// Método que retorna a instância de um usuário
        /// </summary>
        /// <param name="id">Código identificador do usuário</param>
        /// <returns>Retorna a instância do usuário localizado</returns>
        private async Task<Usuario> Find(string id)
            => await _userManager.Users
                .Include(x => x.Roles)
                .Include(x => x.Claims)
                .FirstOrDefaultAsync(x => x.Id == id);

        /// <summary>
        /// Validaçao de usuário
        /// </summary>
        /// <param name="request">Objeto enviado</param>
        /// <param name="existing">Registro que contém no banco</param>
        /// <returns></returns>
        private ErrorResponse Validate(UpdateUsuarioRequest request, Usuario existing)
        {
            var listError = new List<string>();

            if (existing == null)
                listError.Add("Usuário não encontrado.");

            if (request.StatusId <= 0)
                listError.Add("Informar o status");

            if (string.IsNullOrEmpty(request.PerfilId))
                listError.Add("Informar o perfil");

            if (string.IsNullOrEmpty(request.Email))
                listError.Add("Informar o e-mail");

            if (listError.Any())
                return new ErrorResponse(Guid.NewGuid(), "Alguns itens na validação precisam da sua atenção", EnumResponseCode.Generico, listError);

            return null;
        }

        #endregion
    }
}