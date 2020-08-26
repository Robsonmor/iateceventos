using System.ComponentModel;

namespace IAtecAgenda.Domain.Enumerations
{
    public enum EnumTipoEvento
    {
        [Description("Exclusivo")]
        Exclusivo = 1,
        [Description("Compartilhado")]
        Compartilhado = 2
    }
}
