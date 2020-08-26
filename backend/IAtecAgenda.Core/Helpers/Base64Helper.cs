using System.IO;

namespace IAtecAgenda.Core.Helpers
{
    class Base64Helper
    {
        public byte[] DesconvertBase64(string imagebase64)
        {
            string imagecodificadaembase64 = imagebase64;
            byte[] imagemdecodificada = System.Convert.FromBase64String(imagecodificadaembase64);
            return imagemdecodificada;
        }

        public string ConvertBase64(FileInfo arquivo)
        {
            byte[] imagem = System.IO.File.ReadAllBytes(arquivo.FullName);
            string imagebase64 = System.Convert.ToBase64String(imagem);
            return imagebase64;
        }
    }
}
