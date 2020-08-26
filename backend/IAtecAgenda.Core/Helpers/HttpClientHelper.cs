using System;
using System.Net.Http;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

namespace IAtecAgenda.Core.Helpers
{
    public static class HttpClientHelper
    {
        #region Public Static Methods

        public static HttpClientHandler Create()
        {
            var handler = new HttpClientHandler
            {
                ClientCertificateOptions = ClientCertificateOption.Manual,
                ServerCertificateCustomValidationCallback = ValidateRemoteCertificate
            };

            return handler;
        }

        #endregion

        #region Private Static Methods

        private static bool ValidateRemoteCertificate(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors policyErrors)
        {
            ConfigHelper.TryGet<bool>("ApiConsumerConfig:Settings:IgnoreSSLCertificateError", out var ignore);
            if (ignore) return true;

            var sslError = (policyErrors == SslPolicyErrors.None);
            if (!sslError) throw new ArgumentException("Ocorreram erros na validação do certificado SSL.");

            return sslError;
        }

        #endregion
    }
}
