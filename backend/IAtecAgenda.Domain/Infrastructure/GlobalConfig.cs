using System;
using System.Xml.Serialization;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Infrastructure
{
    [DataContract]
    [Serializable]
    [XmlRoot(ElementName = "GlobalConfig")]
    public sealed class GlobalConfig
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "DefaultSmtpPassword")]
        public string DefaultSmtpPassword { get; set; }
        [DataMember, XmlElement(ElementName = "DefaultUserPassword")]
        public string DefaultUserPassword { get; set; }

        #endregion
    }
}
