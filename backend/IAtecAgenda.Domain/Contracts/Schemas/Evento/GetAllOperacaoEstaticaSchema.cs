﻿using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Atividade
{
    /// <summary>
    /// Objeto que contém a definição de dados do Atividade
    /// </summary>
    public sealed class GetAllOperacaoEstaticaSchema : ISchema
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
        
        #endregion

        #region Navigation Properties
        
        #endregion
    }
}
