using AutoMapper;
using System.Reflection;
using AutoMapper.Configuration;

namespace IAtecAgenda.Core.Infrastructure
{
    public sealed class AutoMapperConfig
    {
        #region Constructors

        private AutoMapperConfig()
        { }

        #endregion

        #region Public Static Methods

        public static void Configure()
        {
            var config = new MapperConfigurationExpression()
            {
                AllowNullCollections = true,
                AllowNullDestinationValues = true,
            };

            config.AddMaps(assembliesToScan: Assembly.GetExecutingAssembly());

            Mapper.Initialize(config);
            Mapper.AssertConfigurationIsValid();
            Mapper.Configuration.CompileMappings();
        }

        #endregion
    }
}
