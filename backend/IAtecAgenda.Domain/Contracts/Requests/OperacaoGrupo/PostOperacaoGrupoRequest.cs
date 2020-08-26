using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace IAtecAgenda.Domain.Contracts.Requests.OperacaoGrupo
{
    public sealed class PostOperacaoGrupoRequest : BaseRequest
    {
        #region Public Properties

        /// <summary>
        /// Nome do grupo de operação
        /// </summary>
        [Required, JsonProperty("nome")]
        public string Nome { get; set; }

        #endregion
    }
}
