using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace IAtecAgenda.Core.Business.Services
{
    public class AutenticacaoService : IAutenticacaoService
    {
        public async Task<string> ValidaCredencial(string nome, string senha, string dominio)
        {
            using (var client = new HttpClient())
            {
                var URLApiAD = "";

                var data = $"'usuario': '{nome}', 'senha': '{senha.Base64Encode()}', 'dominio': '{dominio}'";

                var httpContent = new StringContent("{" + data + "}", Encoding.UTF8, "application/json");

                var responseTask = client.PostAsync(URLApiAD, httpContent);

                responseTask.Wait();

                var result = responseTask.Result;

                if (result.IsSuccessStatusCode)
                {
                    return await result.Content.ReadAsStringAsync();
                }
                else
                {
                    return null;
                }
            }
        }
    }
}
