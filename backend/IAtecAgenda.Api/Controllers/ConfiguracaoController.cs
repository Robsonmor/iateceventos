using IAtecAgenda.Api.Infrastructure;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Contracts.Responses;
using IAtecAgenda.Domain.Contracts.Schemas.Configuracao;
using IAtecAgenda.Domain.Infrastructure;
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

namespace IAtecAgenda.Api.Controllers
{
    [ApiController]
    [Consumes("application/json")]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/configuracoes")]
    [OpenApiTag("Configuracao", Description = "Operações com parâmetros de configuração.")]
    public class ConfiguracaoController : BaseController
    {
        #region Private Read-Only Fields

        private readonly IConfiguracaoService _configuracaoService;

        #endregion

        #region Constructors

        public ConfiguracaoController(IUnitOfWork unitOfWork, ILogger<ConfiguracaoController> logger, IMemoryCache memoryCache
            , IConfiguracaoService configuracaoService
        )
            : base(unitOfWork, logger, memoryCache)
        {
            _configuracaoService = configuracaoService ?? throw new ArgumentNullException(nameof(configuracaoService));
        }

        #endregion
    }
}