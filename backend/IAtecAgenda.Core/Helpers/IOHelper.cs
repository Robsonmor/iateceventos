using System.IO;

namespace IAtecAgenda.Core.Helpers
{
    public static class IOHelper
    {
        #region Extension Methods

        public static void EnsureDirectoryExists(string path)
        {
                if (!Directory.Exists(path))
                    Directory.CreateDirectory(path);
        }

        #endregion
    }
}
