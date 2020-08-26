using IAtecAgenda.Api.Extensions;
using IAtecAgenda.Api.Infrastructure;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Domain.Contracts.Requests.Operacao;
using IAtecAgenda.Domain.Contracts.Responses;
using IAtecAgenda.Domain.Contracts.Responses.Operacao;
using IAtecAgenda.Domain.Contracts.Schemas.Operacao;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;
using System;
using System.Threading.Tasks;
using static IAtecAgenda.Domain.Contracts.Responses.ErrorResponse;

namespace IAtecAgenda.Api.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    [Produces("application/json")]
    [Authorize(IdentityServerApiConstants.ResourceName)]
    [Route("api/v{version:apiVersion}/operacoes")]
    [OpenApiTag("Operacao", Description = "Operações relacionadas a manutenção de operações.")]
    public sealed class OperacaoController : BaseController
    {
        #region Private Read-Only Fields


        private readonly IOperacaoService _operacaoService;
        private readonly IOperacaoGrupoService _operacaoGrupoService;

        #endregion

        #region Constructors

        public OperacaoController(IUnitOfWork unitOfWork, ILogger<OperacaoController> logger, IMemoryCache memoryCache
            , IOperacaoService operacaoService
            , IOperacaoGrupoService operacaoGrupoService
        )
            : base(unitOfWork, logger, memoryCache)
        {
            _operacaoService = operacaoService ?? throw new ArgumentNullException(nameof(operacaoService));
            _operacaoGrupoService = operacaoGrupoService ?? throw new ArgumentNullException(nameof(operacaoGrupoService));
        }

        #endregion

        #region Controller Actions

        /// <summary>
        /// Endpoint que possibilita a consulta de todas as operações cadastradas.
        /// </summary>
        /// <param name="hasTemplate">Parâmetro opcional que identifica a dependência de template.</param>
        /// <returns>Retorna a coleção de operações da plataforma.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(GetAllOperacaoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAll([FromQuery] bool? hasTemplate)
        {
            var collection = await _operacaoService.GetAll(hasTemplate);

            var response = new GetAllOperacaoResponse()
            {
                Data = collection.ConvertEntityToSchema<GetAllOperacaoSchema>()
            };


            return Ok(response.Data);
        }

        /// <summary>
        /// Endpoint que possibilita a consulta de operações cadastradas.
        /// </summary>
        /// <param name="request">Objeto que contém os atributos para consulta.</param>
        /// <returns>Retorna a coleção de operações parametrizadas no sistema.</returns>
        [HttpGet("listar")]
        [ProducesResponseType(typeof(ListAllOperacaoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> ListAll([FromQuery] ListAllOperacaoRequest request)
        {
            var result = await _operacaoService.PagedList(request.PageSize, request.PageIndex,
                request.OperacaoGrupoId, request.Nome);

            var schemas = result.Collection.ConvertEntityToSchema<ListAllOperacaoSchema>();

            return Ok(new ListAllOperacaoResponse(result.PageIndex, result.PageSize, result.Total)
            {
                Data = schemas
            });
        }

        /// <summary>
        /// Operação que possibilita a consulta de uma operação.
        /// </summary>
        /// <param name="operacaoId">Código identificador da operação.</param>
        /// <returns>Retorna o objeto contendo as definição de uma operação.</returns>
        [HttpGet("{operacaoId:int}")]
        [ProducesResponseType(typeof(GetOperacaoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Get(int operacaoId)
        {
            var entity = await _operacaoService.Find(operacaoId);
            if (entity == null)
                return NotFound(new ErrorResponse("O recurso solicitado não foi localizado.", EnumResponseCode.Generico));

            var response = new GetOperacaoResponse
            {
                Data = entity.ConvertEntityToSchema<OperacaoSchema>()
            };

            return Ok(response);
        }

        /// <summary>
        /// Operação que possibilita o cadastro de uma nova operação.
        /// </summary>
        /// <param name="apiVersion">Objeto com os dados de versionamento da API.</param>
        /// <param name="model">Objeto com os dados para criação do recurso.</param>
        /// <returns>Retorna o grupo de operação criado.</returns>
        [HttpPost]
        [ProducesResponseType(typeof(PostOperacaoResponse), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Post(ApiVersion apiVersion, [FromBody] PostOperacaoRequest model)
        {
            var operacaoGrupo = await _operacaoGrupoService.Get(model.OperacaoGrupoId);
            if (operacaoGrupo == null)
                ModelState.TryAddModelError(nameof(model.OperacaoGrupoId), "Código identificador do grupo de operação inválido.");

            if (ModelState.IsValid)
            {
                var entity = model.ConvertRequestToEntity<Operacao>();

                await _operacaoService.Create(entity);
                await _unitOfWork.CompleteAsync();

                return CreatedAtAction(nameof(Get), new { version = apiVersion.ToString(), operacaoId = entity.Id }, new PostOperacaoResponse
                {
                    Data = entity.ConvertEntityToSchema<OperacaoSchema>()
                });
            }

            return BadRequest(ModelState.ToErrorResponse());
        }

        /// <summary>
        /// Operação que possibilita atualização de uma operação.
        /// </summary>
        /// <param name="operacaoId">Código identificador da operação.</param>
        /// <param name="model">Objeto com os dados para atualização do recurso.</param>
        [HttpPut("{operacaoId:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Put([FromRoute] int operacaoId, [FromBody] PutOperacaoRequest model)
        {
            var entity = await _operacaoService.Get(operacaoId);
            if (entity == null)
                return NotFound(new ErrorResponse("O recurso solicitado não foi localizado.", EnumResponseCode.Generico));

            var operacaoGrupo = await _operacaoGrupoService.Get(model.OperacaoGrupoId);
            if (operacaoGrupo == null)
                ModelState.TryAddModelError(nameof(model.OperacaoGrupoId), "Código identificador do grupo de operação inválido.");

            if (ModelState.IsValid)
            {
                entity.Nome = model.Nome;
                entity.OperacaoGrupoId = model.OperacaoGrupoId;

                await _operacaoService.Update(entity);
                await _unitOfWork.CompleteAsync();

                return NoContent();
            }

            return BadRequest(ModelState.ToErrorResponse());
        }

        #endregion
    }
}