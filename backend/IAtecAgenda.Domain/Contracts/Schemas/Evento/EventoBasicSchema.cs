using IAtecAgenda.Domain.Contracts.Schemas.Operacao;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Atividade
{
    /// <summary>
    /// Objeto que contém a definição de dados do Atividade
    /// </summary>
    public sealed class EventoBasicSchema : ISchema
    {
        #region Public Properties
        /// <summary>
        /// Id
        /// </summary>        
        [JsonProperty("id")]
        public int Id { get; set; }
        /// <summary>
        /// Nome
        /// </summary>        
        [JsonProperty("nome")]
        public string Nome { get; set; }

        /// <summary>
        /// Ativa ou inativa o controle de autenticidade
        /// </summary>        
        [JsonProperty("controlaAutenticidade")]
        public bool ControlaAutenticidade { get; set; }

        /// <summary>
        /// Obriga o preenchimento de documento extra
        /// </summary>        
        [JsonProperty("requerDocumentoExtra")]
        public bool RequerDocumentoExtra { get; set; }

        /// <summary>
        /// Durante análise de uma esteira, verificar se utilizará módulo Service Center
        /// </summary>        
        [JsonProperty("moduloAnaliseServiceCenter")]
        public bool ModuloAnaliseServiceCenter { get; set; }

        [JsonProperty("validacaoDocumento")]
        public int ValidacaoDocumento { get; set; }

        #endregion

        #region Navigation Properties

        public OperacaoBasicSchema Operacao { get; set; }
        #endregion

        #region Construtor
        public EventoBasicSchema()
        {
            Operacao = new OperacaoBasicSchema();
        }
        #endregion

    }
}
