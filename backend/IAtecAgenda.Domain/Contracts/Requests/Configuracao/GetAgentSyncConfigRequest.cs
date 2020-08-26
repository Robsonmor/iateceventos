namespace IAtecAgenda.Domain.Contracts.Requests.Configuracao
{
    /// <summary>
    /// Objeto de request
    /// </summary>
    public class GetAgentSyncConfigRequest : BaseRequest
    {
        /// <summary>
        /// Grupo de configuração
        /// </summary>
        public string Grupo { get; set; }
        /// <summary>
        /// Chave de configuração
        /// </summary>
        public string Chave { get; set; }
    }
}
