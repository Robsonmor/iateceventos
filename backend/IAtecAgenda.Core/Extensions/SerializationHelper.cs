using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Xml;
using System.Xml.Serialization;

namespace IAtecAgenda.Core.Extensions
{
    public static class SerializationHelper
    {
        #region Private Read-Only Fields

        static readonly XmlWriterSettings _xmlWriterSettings = CreateWriter();
        static readonly XmlSerializerNamespaces _xmlSerializerNamespaces = CreateSerializer();

        #endregion

        #region Constructors

        static SerializationHelper()
        {
            var jsonSettings = new JsonSerializerSettings()
            {
                Formatting = Newtonsoft.Json.Formatting.Indented,
                NullValueHandling = NullValueHandling.Ignore,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                PreserveReferencesHandling = PreserveReferencesHandling.None,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            jsonSettings.Converters.Add(new IsoDateTimeConverter());
            JsonConvert.DefaultSettings = () => jsonSettings;
        }

        #endregion

        #region Extension Methods

        public static string SerializeObject<TObject>(this TObject item)
        {
            using (MemoryStream stream = new MemoryStream())
            {
                using (XmlTextWriter xml = new XmlTextWriter(stream, new UTF8Encoding(false)))
                {
                    XmlSerializer xs = new XmlSerializer(typeof(TObject));
                    xs.Serialize(xml, item, _xmlSerializerNamespaces);

                    return UTF8ByteArrayToString(((MemoryStream)xml.BaseStream).ToArray());
                }
            }
        }


        public static TObject DeserializeObject<TObject>(string xml)
        {
            using (MemoryStream stream = new MemoryStream(StringToUTF8ByteArray(xml)))
            using (new XmlTextWriter(stream, new UTF8Encoding(false)))
            {
                return (TObject)new XmlSerializer(typeof(TObject)).Deserialize(stream);
            }
        }

        public static string SerializeObjectUsingBinaryFormatter<TObject>(this TObject item)
        {
            var serializer = new BinaryFormatter();

            using (MemoryStream ms = new MemoryStream())
            {
                serializer.Serialize(ms, item);
                return UTF8ByteArrayToString(ms.ToArray());
            }
        }

        public static TObject DeserializeObjectUsingBinaryFormatter<TObject>(string str)
        {
            var serializer = new BinaryFormatter();

            using (MemoryStream ms = new MemoryStream(StringToUTF8ByteArray(str)))
            {
                return (TObject)serializer.Deserialize(ms);
            }
        }

        public static string SerializeToXML<TObject>(this TObject value)
        {
            if (value == null) return string.Empty;

            var serializer = new XmlSerializer(typeof(TObject));
            var stringWriter = new StringWriter();

            using (var writer = XmlWriter.Create(stringWriter, _xmlWriterSettings))
            {
                serializer.Serialize(writer, value, _xmlSerializerNamespaces);
                return stringWriter.ToString();
            }
        }

        public static TObject DeserializeFromXML<TObject>(string xml)
        {
            if (xml.IsNullOrEmpty())
                throw new NotSupportedException("ERROR: input string cannot be null.");

            var serializer = new XmlSerializer(typeof(TObject));
            var stringReader = new StringReader(xml);

            using (var reader = XmlReader.Create(stringReader))
            {
                return (TObject)serializer.Deserialize(reader);
            }
        }

        public static string SerializeToDataContract<TObject>(this TObject value)
        {
            if (value == null) return string.Empty;

            using (var output = new StringWriter())
            {
                using (var writer = new XmlTextWriter(output))
                {
                    var serializer = new DataContractSerializer(typeof(TObject));
                    serializer.WriteObject(writer, value);

                    return output.GetStringBuilder().ToString();
                }
            }
        }

        public static TObject DeserializeFromDataContract<TObject>(Type type, string xml)
        {
            try
            {
                if (xml.IsNullOrEmpty())
                    return default;

                using (var stream = new MemoryStream())
                {
                    var data = Encoding.UTF8.GetBytes(xml);
                    stream.Write(data, 0, data.Length);
                    stream.Position = 0;

                    var serializer = new DataContractSerializer(type);
                    return (TObject)serializer.ReadObject(stream);
                }
            }
            catch
            {
                return default;
            }
        }

        public static TObject DeserializeFromDataContract<TObject>(string xml)
        {
            try
            {
                if (xml.IsNullOrEmpty())
                    return default;

                using (var stream = new MemoryStream())
                {
                    var data = Encoding.UTF8.GetBytes(xml);
                    stream.Write(data, 0, data.Length);
                    stream.Position = 0;

                    var serializer = new DataContractSerializer(typeof(TObject));
                    return (TObject)serializer.ReadObject(stream);
                }
            }
            catch
            {
                return default;
            }
        }

        public static string SerializeToJson<TObject>(this TObject value)
        {
            if (value == null) return string.Empty;
            return JsonConvert.SerializeObject(value);
        }

        public static TObject DeserializeFromJson<TObject>(string json)
        {
            if (json.IsNullOrEmpty())
                throw new NotSupportedException("ERROR: input string cannot be null.");

            return JsonConvert.DeserializeObject<TObject>(json);
        }

        #endregion

        #region Private Methods

        private static XmlSerializerNamespaces CreateSerializer()
        {
            var result = new XmlSerializerNamespaces();
            result.Add("", "");

            return result;
        }
        private static XmlWriterSettings CreateWriter()
        {
            return new XmlWriterSettings()
            {
                NewLineOnAttributes = false,
                OmitXmlDeclaration = true,
                Indent = false,
                NewLineHandling = NewLineHandling.None,
                Encoding = Encoding.UTF8,
                NamespaceHandling = NamespaceHandling.OmitDuplicates
            };
        }

        private static byte[] StringToUTF8ByteArray(string xml)
        {
            return new UTF8Encoding().GetBytes(xml);
        }

        private static string UTF8ByteArrayToString(byte[] characters)
        {
            return new UTF8Encoding().GetString(characters);
        }

        #endregion
    }
}
