//using IAtecAgenda.Api.Infrastructure;
//using IAtecAgenda.Domain.Constants;
//using IAtecAgenda.Domain.Contracts.Responses;
//using IAtecAgenda.Domain.Contracts.Responses.Dashboard;
//using IAtecAgenda.Domain.Interfaces.Business;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Caching.Memory;
//using NSwag.Annotations;
//using System.Threading.Tasks;

//namespace IAtecAgenda.Api.Controllers
//{
//    [ApiController]
//    [Consumes("application/json")]
//    [Produces("application/json")]
//    [Authorize(IdentityServerApiConstants.ResourceName)]
//    [Route("api/v{version:apiVersion}/dashboards")]
//    [OpenApiTag("Dashboard", Description = "Painel Dashboard com os dados diários")]
//    public sealed class DashboardController : BaseController
//    {
//        #region Private Read-Only Fields          
      
       

//        #endregion

//        #region Constructors

//        public DashboardController(IUnitOfWork unitOfWork, IMemoryCache memoryCache
             
//        )
//            : base(unitOfWork, null,memoryCache)
//        {
              
//        }

//        #endregion

//        #region Controller Actions

//        /// <summary>
//        /// Retorno de dados principais para ser utilizado no DashBoard
//        /// </summary>
//        /// <returns>Retorno de dados principais para ser utilizado no DashBoard</returns>
//        [HttpGet]
//        [ProducesResponseType(typeof(DashboardResponse), StatusCodes.Status200OK)]
//        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status401Unauthorized)]
//        [ProducesResponseType(typeof(ErrorResponse), StatusCodes.Status500InternalServerError)]
//        public async Task<ActionResult> Get()
//        {
           
//            return Ok();
//        }

//        #endregion

   
//    }
//}