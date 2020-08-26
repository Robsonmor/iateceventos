using IAtecAgenda.Api.Extensions;
using IAtecAgenda.Api.Infrastructure;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Domain.Contracts.Requests.Evento;
using IAtecAgenda.Domain.Contracts.Responses;
using IAtecAgenda.Domain.Contracts.Responses.Evento;
using IAtecAgenda.Domain.Contracts.Schemas.Evento;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Enumerations;
using IAtecAgenda.Domain.Interfaces.Business;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;
using System;
using System.Linq;
using System.Threading.Tasks;
using static IAtecAgenda.Domain.Contracts.Responses.ErrorResponse;

namespace IAtecAgenda.Api.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/Eventos")]
    [Authorize(IdentityServerApiConstants.ResourceName)]
    [OpenApiTag("Evento", Description = "Tratamento de Eventos sistêmicas")]
    public sealed class EventoController : BaseController
    {
        #region Private Read-Only Fields
        private readonly IEventoService _eventoService;
        private readonly IOperacaoService _operacaoService;
        private readonly IEventoParticipanteService _EventoParticipanteService;

        #endregion

        #region Constructors
        public EventoController(IUnitOfWork unitOfWork, ILogger<EventoController> logger, IMemoryCache memoryCache
            , IEventoService eventoService          
            , IOperacaoService operacaoService
            , IEventoParticipanteService EventoParticipanteService
        )
            : base(unitOfWork, logger, memoryCache)
        {
            _eventoService = eventoService ?? throw new ArgumentNullException(nameof(eventoService));
            _operacaoService = operacaoService ?? throw new ArgumentNullException(nameof(operacaoService));
            _EventoParticipanteService = EventoParticipanteService ?? throw new ArgumentNullException(nameof(EventoParticipanteService));
        }
        #endregion

        #region Controller Actions

        /// <summary>
        /// Endpoint que possibilita a consulta de todas as Eventos cadastradas.
        /// </summary>
        /// <param name="hasTemplate">Parâmetro opcional que identifica a dependência de template.</param>
        /// <param name="operacaoId">Parâmetro opcional que identifica a operação.</param>
        /// <returns>Retorna a coleção de operações da plataforma.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(GetAllEventoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAll([FromQuery]bool? hasTemplate, [FromQuery]int? operacaoId)
        {
            var collection = await _eventoService.GetAll(hasTemplate, operacaoId);
            var response = new GetAllEventoResponse()
            {
                Data = collection.ConvertEntityToSchema<EventoSchema>().OrderBy(x => x.Nome)
            };

            return Ok(response);
        }

        /// <summary>
        /// Endpoint que possibilita a consulta de Eventos cadastradas.
        /// </summary>
        /// <param name="request">Objeto que contém os atributos para consulta.</param>
        /// <returns>Retorna a coleção de Eventos  no sistema.</returns>
        [HttpGet("listar")]
        [ProducesResponseType(typeof(ListAllEventoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> ListAll([FromQuery]ListAllEventoRequest request)
        {
            var result = await _eventoService.PagedList(request.PageSize, request.PageIndex,
                request.OperacaoId, request.Nome);

            var schemas = result.Collection.ConvertEntityToSchema<EventoSchema>();

            return Ok(new ListAllEventoResponse(result.PageIndex, result.PageSize, result.Total)
            {
                Data = schemas
            });
        }

        /// <summary>
        /// Operação que possibilita a consulta de uma operação.
        /// </summary>
        /// <param name="EventoId">Código identificador da operação.</param>
        /// <returns>Retorna o objeto contendo as definição de uma operação.</returns>
        [HttpGet("{EventoId:int}")]
        [ProducesResponseType(typeof(GetEventoResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Get(int EventoId)
        {
            var entity = await _eventoService.Find(EventoId);
            if (entity == null) return NotFound(new ErrorResponse("Não foi possível localizar o recurso solicitado.", EnumResponseCode.Generico));

          

            var response = new GetEventoResponse
            {
                Data = entity.ConvertEntityToSchema<EventoSchema>()
            };

            return Ok(response);
        }

        /// <summary>
        /// Operação utilizada para criação de uma nova Evento
        /// </summary>
        /// <param name="EventoId"></param>
        /// <param name="request">Objeto que contém as definições de dados</param>
        [HttpPut("{EventoId:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]

        public async Task<IActionResult> Put([FromRoute]int EventoId, [FromBody]EventoRequest request)
        {
            var userId = User.GetUserId();
            var validate = ValidateBadRequest(request);
            if (!string.IsNullOrEmpty(validate))
            {
                return BadRequest(new ErrorResponse(validate, EnumResponseCode.Generico));
            }

            var operacao = await _operacaoService.Find(request.Id);

            if (operacao != null)
            {
                var entity = await UpdateEvento(request, EventoId);            
                await UpdateParticipantes(request, entity);
             

                await _eventoService.Update(entity);
            }

            await _unitOfWork.CompleteAsync();
            return NoContent();

        }


        /// <summary>
        /// Operação utilizada para criação de uma nova Evento
        /// </summary>
        /// <param name="request">Objeto que contém as definições de dados</param>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]

        public async Task<IActionResult> Post([FromBody]EventoRequest request)
        {
            var validate = ValidateBadRequest(request);
            if (!string.IsNullOrEmpty(validate))
            {
                return BadRequest(new ErrorResponse(validate, EnumResponseCode.Generico));
            }

            var operacao = await _operacaoService.Find(request.Id);

            if (operacao != null)
            {
                var Evento = await CreateEvento(request, operacao);
             
                await CreateParticipantes(request, Evento.Id);
             
            }

            await _unitOfWork.CompleteAsync();
            return NoContent();

        }

        private async Task<Evento> UpdateEvento(EventoRequest request, int EventoId)
        {
            var entity = await _eventoService.FindUpdate(EventoId);

            entity.Nome = request.Nome;
            entity.Descricao = request.Descricao;
            entity.Data = request.Data;
            entity.Local = request.Local;
            entity.TipoEvento = request.TipoEventoId;
            return entity;
        }

        private async Task<Evento> CreateEvento(EventoRequest request, Operacao operacao)
        {
            int EventoId = await _eventoService.MaxByOperacao(operacao.Id) + 100;

            var entity = new Evento()
            {
                Id = EventoId,
                Nome = request.Nome,
                Descricao = request.Descricao,
                Data = request.Data,
                Local = request.Local,
                TipoEvento = request.TipoEventoId,
            };

            await _eventoService.Create(entity);
            return entity;
        }

       
        #endregion

        #region Private Methods



        private string ValidateBadRequest(EventoRequest request)
        {
            if (String.IsNullOrEmpty(request.Nome))
                return "Nome é um campo obrigatório";

            if (String.IsNullOrEmpty(request.Descricao))
                return "Descricao é um campo obrigatório";

            if (request.Data == null)
                return "Data é um campo obrigatório";

            if (string.IsNullOrEmpty(request.Local))
                return "É obrigatório informar Local";

            if (request.TipoEventoId == 0)
                return "É obrigatório informar o TipoEvento";         

            return null;
        }


        private async Task UpdateParticipantes(EventoRequest request, Evento entity)
        {
         
            foreach (var item in request.Participantes)
            {
                var EventoParticipantes = new EventoParticipante()
                {
                    EventoId = entity.Id,
                    ParticipanteId = item.Id
                };

                await _EventoParticipanteService.Create(EventoParticipantes);
            }
        }

        private async Task CreateParticipantes(EventoRequest request, int EventoId)
        {
            foreach (var item in request.Participantes)
            {
                var EventoMotivoRejeito = new EventoParticipante()
                {
                    EventoId = EventoId,
                    ParticipanteId = item.Id
                };

                await _EventoParticipanteService.Create(EventoMotivoRejeito);
            }
        }
        #endregion
    }
}