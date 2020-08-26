using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Caching.Memory;
using IAtecAgenda.Domain.Interfaces.Business;

namespace IAtecAgenda.Api.Infrastructure
{
    public class BaseController : ControllerBase
    {
        #region Protected Read-Only Fields

        protected readonly ILogger _logger;
        protected readonly IUnitOfWork _unitOfWork;
        protected readonly IMemoryCache _memoryCache;

        #endregion

        #region Constructors

        /// <summary>
        /// Construtor da classe
        /// </summary>
        /// <param name="unitOfWork">Instâcia do objeto UnitOfWork</param>
        /// <param name="logger">Instância do objeto Logger</param>
        /// <param name="memoryCache">Instância do gerenciador de cache em memoria</param>
        public BaseController(IUnitOfWork unitOfWork, ILogger logger, IMemoryCache memoryCache)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
            _memoryCache = memoryCache ?? throw new ArgumentNullException(nameof(memoryCache));
        }

        #endregion
    }
}
