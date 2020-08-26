using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Dashboard
{
    /// <summary>
    /// Objeto que contém as definições da Dashboard
    /// </summary>
    public sealed class DashboardFluxoAnaliseSchema : BaseSchema
    {
        #region Public Properties

        /// <summary>
        /// AguardandoDigitalizacao
        /// </summary>
        [JsonProperty("aguardandoDigitalizacao")]
        public int AguardandoDigitalizacao { get; set; }

        /// <summary>
        /// AguardandoOCR
        /// </summary>
        [JsonProperty("aguardandoOCR")]
        public int AguardandoOCR { get; set; }


        /// <summary>
        /// TriagemManual
        /// </summary>
        [JsonProperty("triagemManual")]
        public int TriagemManual { get; set; }

        /// <summary>
        /// AguardandoAnalise
        /// </summary>
        [JsonProperty("aguardandoAnalise")]
        public int AguardandoAnalise { get; set; }


        /// <summary>
        /// EmAnalise
        /// </summary>
        [JsonProperty("emAnalise")]
        public int EmAnalise { get; set; }

        /// <summary>
        /// EmEspera
        /// </summary>
        [JsonProperty("emEspera")]
        public int EmEspera { get; set; }


        /// <summary>
        /// AguardandoArquivo
        /// </summary>
        [JsonProperty("aguardandoArquivo")]
        public int AguardandoArquivo { get; set; }

        /// <summary>
        /// ArquivoCaixaDefinitiva
        /// </summary>
        [JsonProperty("arquivoCaixaDefinitiva")]
        public int ArquivoCaixaDefinitiva { get; set; }


        /// <summary>
        /// AguardandoDevolucao
        /// </summary>
        [JsonProperty("aguardandoDevolucao")]
        public int AguardandoDevolucao { get; set; }

        /// <summary>
        /// DevolvidoEmMalote
        /// </summary>
        [JsonProperty("devolvidoEmMalote")]
        public int DevolvidoEmMalote { get; set; }


        #endregion
    }
}
