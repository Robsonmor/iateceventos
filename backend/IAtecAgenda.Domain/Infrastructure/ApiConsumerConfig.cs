using System;
using System.Xml.Serialization;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Infrastructure
{
    [DataContract]
    [Serializable]
    [XmlRoot(ElementName = "ApiConsumerConfig")]
    public sealed class ApiConsumerConfig
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "Settings")]
        public SettingsConfig Settings { get; set; }

        [DataMember, XmlElement(ElementName = "Gateways")]
        public IEnumerable<GatewayConfig> Gateways { get; set; }

        #endregion
    }

    #region Internal Sealed Class

    [DataContract]
    [Serializable]
    public sealed class SettingsConfig
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "RequestTimeout")]
        public int RequestTimeout { get; set; }

        [DataMember, XmlElement(ElementName = "ConnectionLimit")]
        public int ConnectionLimit { get; set; }

        [DataMember, XmlElement(ElementName = "IgnoreSSLCertificateError")]
        public bool IgnoreSSLCertificateError { get; set; }

        #endregion
    }

    [DataContract]
    [Serializable]
    public sealed class GatewayConfig
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "Name")]
        public string Name { get; set; }

        [DataMember, XmlElement(ElementName = "Authorization")]
        public AuthorizationConfig Authorization { get; set; }

        [DataMember, XmlElement(ElementName = "Endpoints")]
        public IEnumerable<EndpointConfig> Endpoints { get; set; }

        #endregion
    }

    [DataContract]
    [Serializable]
    public sealed class AuthorizationConfig
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "Flow")]
        public string Flow { get; set; }

        [DataMember, XmlElement(ElementName = "ClientId")]
        public string ClientId { get; set; }

        [DataMember, XmlElement(ElementName = "ClientSecret")]
        public string ClientSecret { get; set; }

        [DataMember, XmlElement(ElementName = "TokenEndpoint")]
        public string TokenEndpoint { get; set; }

        [DataMember, XmlElement(ElementName = "Username")]
        public string Username { get; set; }

        [DataMember, XmlElement(ElementName = "Password")]
        public string Password { get; set; }

        #endregion
    }

    [DataContract]
    [Serializable]
    public sealed class EndpointConfig
    {
        #region Public Properties

        [DataMember, XmlElement(ElementName = "Name")]
        public string Name { get; set; }

        [DataMember, XmlElement(ElementName = "Address")]
        public string Address { get; set; }

        #endregion
    }

    #endregion
}
