using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Net.Http.Formatting;
using Newtonsoft.Json.Serialization;

namespace IAtecAgenda.Core.Infrastructure
{
    public class JsonConfig
    {
        public static JsonConfig Configure()
        {
            JsonConvert.DefaultSettings = () =>
            {
                var settings = new JsonSerializerSettings()
                {
                    Formatting = Formatting.None,
                    NullValueHandling = NullValueHandling.Ignore,
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                    PreserveReferencesHandling = PreserveReferencesHandling.None,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };

                settings.Converters.Add(new StringEnumConverter());
                settings.Converters.Add(new IsoDateTimeConverter());

                return settings;
            };

            return new JsonConfig();
        }

        public JsonMediaTypeFormatter MediaTypeFormatter
        {
            get
            {
                var json = new JsonMediaTypeFormatter
                {
                    SerializerSettings = JsonConvert.DefaultSettings()
                };

                return json;
            }
        }
    }
}
