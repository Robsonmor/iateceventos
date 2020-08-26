using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel;
using IAtecAgenda.Domain.Interfaces.Contracts.Responses;

namespace IAtecAgenda.Domain.Contracts.Responses
{
    public sealed class ErrorResponse : IErrorResponse
    {
        #region IErrorResponse Members

        [JsonProperty("id")]
        public object Id { get; }
        [JsonProperty("message")]
        public string Message { get; }
        [JsonProperty("code")]
        public EnumResponseCode Code { get; }
        [JsonProperty("errors")]
        public IEnumerable<object> Errors { get; set; }

        #endregion

        #region Constructors

        public ErrorResponse(string message, EnumResponseCode code)
            : this(id: null, message, code, errors: null)
        { }

        public ErrorResponse(object id, string message, EnumResponseCode code)
            : this(id, message, code, errors: null)
        { }

        public ErrorResponse(object id, string message, EnumResponseCode code, IEnumerable<object> errors)
        {
            Id = id ?? Guid.NewGuid();
            Code = code;
            Message = message;
            Errors = errors ?? new List<object>();
        }
        #endregion
        public enum EnumResponseCode
        {
            [Description("Genérico")]
            Generico = 0
        }
    }
}

