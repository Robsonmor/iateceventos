
namespace IAtecAgenda.Domain.Contracts.Schemas.Dashboard
{
    /// <summary>
    /// Objeto que contém as definições da Dashboard
    /// </summary>
    public sealed class DashboardSchema : BaseSchema
    {
        #region Public Properties

        /// <summary>
        /// RecepcaoMalote
        /// </summary>
        public DashboardRecepcaoMaloteSchema RecepcaoMalote { get; set; }

        /// <summary>
        /// RecepcaoBolsao
        /// </summary>
        public DashboardRecepcaoBolsaoSchema RecepcaoBolsao { get; set; }

        /// <summary>
        /// Expedicao
        /// </summary>
        public DashboardExpedicaoSchema Expedicao { get; set; }

        /// <summary>
        /// RecebimentoDigital
        /// </summary>
        public DashboardRecebimentoDigitalSchema RecebimentoDigital { get; set; }

        /// <summary>
        /// FluxoAnalise
        /// </summary>
        public DashboardFluxoAnaliseSchema FluxoAnalise { get; set; }

        #endregion
    }
}
