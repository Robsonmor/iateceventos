using System;
using NSwag.Annotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Api.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using IAtecAgenda.Domain.Enumerations;
using Microsoft.Extensions.Caching.Memory;
using IAtecAgenda.Domain.Contracts.Responses;
using IAtecAgenda.Domain.Interfaces.Business;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Contracts.Schemas.GrupoOperacao;
using IAtecAgenda.Domain.Contracts.Requests.OperacaoGrupo;
using IAtecAgenda.Domain.Contracts.Responses.OperacaoGrupo;
using static IAtecAgenda.Domain.Contracts.Responses.ErrorResponse;

namespace IAtecAgenda.Api.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    [Produces("application/json")]
    [Authorize(IdentityServerApiConstants.ResourceName)]
    [Route("api/v{version:apiVersion}/operacao-grupos")]
    [OpenApiTag("OperacaoGrupo", Description = "Operações relacionadas ao manutenção de operação de grupos.")]
    public sealed class OperacaoGrupoController : BaseController
    {
        #region Private Read-Only Fields

        private readonly IOperacaoGrupoService _operacaoGrupoService;

        #endregion

        #region Constructors

        public OperacaoGrupoController(IUnitOfWork unitOfWork, ILogger<OperacaoGrupoController> logger, IMemoryCache memoryCache
            , IOperacaoService operacaoService
            , IOperacaoGrupoService operacaoGrupoService
        )
            : base(unitOfWork, logger, memoryCache)
        {
            _operacaoGrupoService = operacaoGrupoService ?? throw new ArgumentNullException(nameof(operacaoGrupoService));
        }

        #endregion


        #region Controller Actions

        /// <summary>
        /// Operação que possibilita a consulta de grupos de operação.
        /// </summary>
        /// <returns>Retorna a coleção de filas parametrizadas no sistema.</returns>
        [HttpGet("listar")]
        [ProducesResponseType(typeof(ListOperacaoGrupoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _operacaoGrupoService.GetAll();

            return Ok(new ListOperacaoGrupoResponse()
            {
                Data = result.ConvertEntityToSchema<OperacaoGrupoSchema>()
            });
        }

        /// <summary>
        ///  Operação que possibilita de filtrar consulta de grupos de operação.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(typeof(GetAllOperacaoGrupoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> FindAll([FromQuery] GetAllOperacaoGrupoRequest request)
        {
            var result = await _operacaoGrupoService.PagedList(request.PageSize, request.PageIndex, request.Nome);

            return Ok(new GetAllOperacaoGrupoResponse(result.PageIndex, result.PageSize, result.Total)
            {
                Data = result.Collection.ConvertEntityToSchema<OperacaoGrupoSchema>()
            });
        }

        /// <summary>
        /// Operação que possibilita a obter dados de um grupo de operação.
        /// </summary>
        /// <param name="operacaoGrupoId">Código identificador do grupo de operação.</param>
        /// <returns>Retorna o grupo de operação relacionado ao código identificador.</returns>
        [HttpGet("{operacaoGrupoId:int}")]
        [ProducesResponseType(typeof(GetOperacaoGrupoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Get([FromRoute] int operacaoGrupoId)
        {
            var entity = await _operacaoGrupoService.Get(operacaoGrupoId);
            if (entity == null)
                return NotFound(new ErrorResponse("O recurso solicitado não foi localizado.", EnumResponseCode.Generico));

            return Ok(new GetOperacaoGrupoResponse
            {
                Data = entity.ConvertEntityToSchema<OperacaoGrupoSchema>()
            });
        }

        /// <summary>
        /// Operação que possibilita criar um grupo de operação.
        /// </summary>
        /// <param name="apiVersion">Objeto com os dados de versionamento da API.</param>
        /// <param name="model">Objeto com os dados para criação do recurso.</param>
        /// <returns>Retorna o grupo de operação criado.</returns>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Post(ApiVersion apiVersion, [FromBody] PostOperacaoGrupoRequest model)
        {
            var entity = model.ConvertRequestToEntity<OperacaoGrupo>();

            await _operacaoGrupoService.Create(entity);
            await _unitOfWork.CompleteAsync();

            return CreatedAtAction(nameof(Get), new { version = apiVersion.ToString(), operacaoGrupoId = entity.Id }, new PostOperacaoGrupoResponse
            {
                Data = entity.ConvertEntityToSchema<OperacaoGrupoSchema>()
            });
        }

        /// <summary>
        /// Operação que possibilita atualizar dados de um grupo de operação.
        /// </summary>
        /// <param name="operacaoGrupoId">Código identificador do grupo de operação.</param>
        /// <param name="model">Objeto com os dados para atualização do recurso.</param>
        /// <returns>Retorna o grupo de operação relacionado ao código identificador.</returns>
        [HttpPut("{operacaoGrupoId:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Put([FromRoute] int operacaoGrupoId, [FromBody] PutOperacaoGrupoRequest model)
        {
            var entity = await _operacaoGrupoService.Get(operacaoGrupoId);
            if (entity == null)
                return NotFound(new ErrorResponse("O recurso solicitado não foi localizado.", EnumResponseCode.Generico));

            entity.Nome = model.Nome;

            await _operacaoGrupoService.Update(entity);
            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        #endregion
    }
}