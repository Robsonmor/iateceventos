using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IAtecAgenda.Core.Extensions
{
    public static class PropertyBuilderExtensions
    {
        #region Extension Methods

        public static PropertyBuilder<decimal> HasPrecision(this PropertyBuilder<decimal> builder, int precision, int scale)
        {
            return builder.HasColumnType($"decimal({precision},{scale})");
        }

        public static PropertyBuilder<decimal?> HasPrecision(this PropertyBuilder<decimal?> builder, int precision, int scale)
        {
            return builder.HasColumnType($"decimal({precision},{scale})");
        }

        #endregion
    }
}
