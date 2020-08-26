using System;
using System.Linq;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using System.Collections.Generic;
using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Core.Extensions;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Caching.Memory;
using IAtecAgenda.Domain.Infrastructure;

namespace IAtecAgenda.Core.Infrastructure
{
    public sealed class HttpClientConsumer : HttpClient
    {
        #region Constructors

        public HttpClientConsumer(IMemoryCache memoryCache, GatewayConfig gatewayConfig, int requestTimeout)
            : base(handler: GenericMessageProcessingHandler.Create(memoryCache, gatewayConfig), disposeHandler: true)
        {
            Timeout = TimeSpan.FromMilliseconds(requestTimeout);
        }

        #endregion
    }

    internal class GenericMessageProcessingHandler : MessageProcessingHandler
    {
        #region Private Read-Only Fields

        private readonly Token _token;

        #endregion

        #region Constructors

        protected GenericMessageProcessingHandler(Token token)
            : base(HttpClientHelper.Create()) => _token = token;

        #endregion

        #region Public Statis Methods

        public static GenericMessageProcessingHandler Create(IMemoryCache memoryCache, GatewayConfig gatewayConfig)
        {
            TokenManager.Create(memoryCache).TryGetAccessToken(gatewayConfig, out var accessToken);
            return new GenericMessageProcessingHandler(accessToken);
        }

        #endregion

        #region Overriden Methods

        protected override HttpRequestMessage ProcessRequest(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request.Method == HttpMethod.Post || request.Method == HttpMethod.Put || request.Method == HttpMethod.Patch)
                request.Content.Headers.TryAddWithoutValidation("Content-Type", "application/json; charset=utf-8");

            if (_token != null)
                request.Headers.Authorization = new AuthenticationHeaderValue(_token.TokenType, _token.AccessToken);

            return request;
        }

        protected override HttpResponseMessage ProcessResponse(HttpResponseMessage response, CancellationToken cancellationToken) => response;

        #endregion
    }

    internal sealed class Token
    {
        #region Private Fields

        private DateTime? _expiration;

        #endregion

        #region Public Properties

        [JsonProperty("token_type")]
        public string TokenType { get; set; }

        [JsonProperty("access_token")]
        public string AccessToken { get; set; }

        [JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }

        [JsonProperty("expires_in")]
        public int ExpiresIn { get; set; }

        [JsonProperty("expiration")]
        public DateTime? Expiration
        {
            get
            {
                if (!_expiration.HasValue)
                {
                    var handler = new JwtSecurityTokenHandler();
                    var payload = handler.ReadJwtToken(AccessToken);
                    if (payload != null) _expiration = payload.ValidTo;
                }

                return _expiration;
            }
            set { _expiration = value; }
        }

        #endregion

        #region Constructors

        public Token() => TokenType = "Bearer";

        public Token(string tokenType, string accessToken, string refreshToken)
            : this()
        {
            TokenType = tokenType;
            AccessToken = accessToken;
            RefreshToken = refreshToken;
        }

        #endregion

        #region Public Methods

        public bool IsExpired() => (Expiration.HasValue && Expiration.Value < DateTime.UtcNow);

        #endregion
    }

    internal class TokenManager
    {
        #region Private Read-Only Fields

        private readonly IMemoryCache _memoryCache;

        #endregion

        #region Constructors

        protected TokenManager(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache ?? throw new ArgumentNullException(nameof(memoryCache));
        }

        #endregion

        #region Public Static Methods

        public static TokenManager Create(IMemoryCache memoryCache)
        {
            return new TokenManager(memoryCache);
        }

        #endregion

        #region Pulic Methods

        public bool TryGetAccessToken(GatewayConfig gatewayConfig, out Token token)
        {
            token = default(Token);
            var tokenName = $"{gatewayConfig.Name}_TOKEN".ToUpper();

            var recovered = TryGetCachedAccessToken(tokenName, out var cachedToken);
            if (recovered)
                token = cachedToken;
            else
            {
                var newToken = RequestNewAccessToken(tokenName, gatewayConfig).Result;
                token = newToken;
            }

            return true;
        }

        #endregion

        #region Private Methods

        private bool TryGetCachedAccessToken(string tokenName, out Token cachedToken)
        {
            cachedToken = default(Token);

            var recovered = _memoryCache.TryGetValue<Token>(tokenName, out var token);
            if (recovered && !token.IsExpired())
            {
                cachedToken = token;
                return true;
            }

            return false;
        }

        private async Task<Token> RequestNewAccessToken(string tokenName, GatewayConfig gatewayConfig)
        {
            var content = new Dictionary<string, string>
            {
                { "grant_type", gatewayConfig.Authorization.Flow },
                { "client_id", gatewayConfig.Authorization.ClientId },
                { "client_secret", gatewayConfig.Authorization.ClientSecret }
            };

            if (gatewayConfig.Authorization.Flow.EqualsIgnoreCase("password"))
            {
                content.Add("username", gatewayConfig.Authorization.Username);
                content.Add("password", gatewayConfig.Authorization.Password);
            }

            var token = await GetAccessToken(gatewayConfig.Authorization.TokenEndpoint, content);

            if (token != null && !string.IsNullOrEmpty(tokenName))
            {
                var options = new MemoryCacheEntryOptions
                {
                    SlidingExpiration = TimeSpan.FromTicks(token.Expiration.Value.ToUniversalTime().Ticks)
                };

                _memoryCache.Remove(tokenName);
                _memoryCache.Set(tokenName, token, options);
            }

            return token;
        }

        private async Task<Token> GetAccessToken(string tokenEndpoint, Dictionary<string, string> data, string mediaType = "application/x-www-form-urlencoded", Dictionary<string, string> headers = null)
        {
            var handler = HttpClientHelper.Create();
            var formatters = new MediaTypeFormatter[] { JsonConfig.Configure().MediaTypeFormatter };

            using (var client = new HttpClient(handler))
            {
                if (headers != null && headers.Any())
                {
                    foreach (var header in headers)
                        client.DefaultRequestHeaders.TryAddWithoutValidation(header.Key, header.Value);
                }

                if (mediaType.EqualsIgnoreCase("application/x-www-form-urlencoded"))
                    using (var content = new FormUrlEncodedContent(data))
                    {
                        content.Headers.Clear();
                        content.Headers.ContentType = new MediaTypeHeaderValue("application/x-www-form-urlencoded");

                        var response = await client.PostAsync(tokenEndpoint, content);
                        response.EnsureSuccessStatusCode();

                        return await response.Content.ReadAsAsync<Token>(formatters);
                    }
                else if(mediaType.EqualsIgnoreCase("application/json"))
                {
                    object content = data.ToObject();
                    var response = await client.PostAsync(tokenEndpoint, content, formatter: formatters.FirstOrDefault());
                    response.EnsureSuccessStatusCode();

                    return await response.Content.ReadAsAsync<Token>(formatters);
                }
                else
                    throw new UnsupportedMediaTypeException($"MediaType not supported.", new MediaTypeHeaderValue(mediaType));
            }
        }

        #endregion
    }
}
