using System.ComponentModel;

namespace IAtecAgenda.Domain.Enumerations
{
    public enum EnumPerfil
    {
        [Description("Administrador")]
        Administrador = 10000,
        [Description("Cliente")]
        Cliente = 20000,
        [Description("Sistema")]
        Sistema = 99999
    }
}
