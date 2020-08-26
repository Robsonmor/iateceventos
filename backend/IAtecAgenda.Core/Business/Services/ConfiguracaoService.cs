using System;
using System.Threading.Tasks;
using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using IAtecAgenda.Domain.Interfaces.Business.Services;

namespace IAtecAgenda.Core.Business.Services
{
    public sealed class ConfiguracaoService : IConfiguracaoService
    {
        #region Private Read-Only Fields

        private readonly IConfiguracaoRepository _repository;

        #endregion

        #region Constructors

        public ConfiguracaoService(IConfiguracaoRepository repository)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        #endregion

        #region IConfiguracaoService Members

        public async Task<Configuracao> Get(string grupo, string chave)
        {
            ValidateAndThrow(grupo, chave);
            return await _repository.Get(grupo, chave);
        }

        public async Task<TParametros> GetParametros<TParametros>(string grupo, string chave)
            where TParametros : class
        {
            ValidateAndThrow(grupo, chave);

            var output = default(TParametros);
            var entity = await Get(grupo, chave);

            if (entity != null && entity.Parametros != null)
                output = SerializationHelper.DeserializeFromDataContract<TParametros>(xml: entity.Parametros);

            return output;
        }

        public async Task<string> GetValor(string grupo, string chave)
        {
            ValidateAndThrow(grupo, chave);

            var entity = await Get(grupo, chave);
            if (entity != null) return entity.Valor;

            return null;
        }

        public async Task<TValor> GetValor<TValor>(string grupo, string chave)
            where TValor : struct
        {
            ValidateAndThrow(grupo, chave);

            var entity = await Get(grupo, chave);
            ParserTypeHelper<TValor>.TryParse(entity.Valor, out TValor output);

            return output;
        }

        public bool TryGetValor<TValor>(string grupo, string chave, out TValor output) where TValor : struct
        {
            ValidateAndThrow(grupo, chave);

            var entity = Get(grupo, chave).Result;
            return ParserTypeHelper<TValor>.TryParse(entity.Valor, out output);
        }

        #endregion

        #region Private Methods

        private void ValidateAndThrow(string grupo, string chave)
        {
            if (grupo.IsNullOrEmpty())
                throw new ArgumentNullException(nameof(grupo));

            if (chave.IsNullOrEmpty())
                throw new ArgumentNullException(nameof(chave));
        }

        #endregion
    }
}
