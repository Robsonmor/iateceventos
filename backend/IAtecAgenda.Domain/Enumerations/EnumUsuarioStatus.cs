using System.ComponentModel;

namespace IAtecAgenda.Domain.Enumerations
{
    public enum EnumUsuarioStatus
    {
        [Description("Pendente")]
        Pendente = 1,
        [Description("Ativo")]
        Ativo = 2,
        [Description("Inativo")]
        Inativo = 3
    }
}
