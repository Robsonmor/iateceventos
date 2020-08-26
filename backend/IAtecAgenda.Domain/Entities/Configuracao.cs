using System;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class Configuracao : BaseEntity
    {
        #region Public Properties

        [DataMember]
        public string Grupo { get; set; }
        [DataMember]
        public string Chave { get; set; }
        [DataMember]
        public string Descricao { get; set; }
        [DataMember]
        public string Tipo { get; set; }
        [DataMember]
        public string Valor { get; set; }
        [DataMember]
        public string Parametros { get; set; }
        [DataMember]
        public string CriadoPorId { get; set; }
        [DataMember]
        public DateTime DataCadastro { get; set; }
        [DataMember]
        public string AlteradoPorId { get; set; }
        [DataMember]
        public DateTime? DataAlteracao { get; set; }

        #endregion

        #region Navigation Properties

        public virtual Usuario CriadoPor { get; set; }
        public virtual Usuario AlteradoPor { get; set; }

        #endregion
    }
}
