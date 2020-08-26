using IAtecAgenda.Domain.Entities;
using System;
using System.Runtime.Serialization;
using System.Xml.Serialization;

namespace IAtecAgenda.Domain.Infrastructure
{
    [DataContract]
    [Serializable]
    [XmlRoot(ElementName = "GlobalConfig")]
    public sealed class LocalRepositoryConfig : BaseEntity
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "Directory")]
        public string Directory { get; set; }

        [DataMember, XmlElement(ElementName = "RetriesPath")]
        public string RetriesPath { get; set; }

        [DataMember, XmlElement(ElementName = "ErrorPath")]
        public string ErrorPath { get; set; }

        [DataMember, XmlElement(ElementName = "BackupPath")]
        public string BackupPath { get; set; }

        [DataMember, XmlElement(ElementName = "Recursive")]
        public bool Recursive { get; set; }

        [DataMember, XmlElement(ElementName = "MatchExpression")]
        public string MatchExpression { get; set; }

        [DataMember, XmlElement(ElementName = "ExtesionFrom")]
        public string ExtesionFrom { get; set; }

        [DataMember, XmlElement(ElementName = "ExtesionTo")]
        public string ExtesionTo { get; set; }

        [DataMember, XmlElement(ElementName = "ConvertActive")]
        public bool ConvertActive { get; set; }

        #endregion
    }
}