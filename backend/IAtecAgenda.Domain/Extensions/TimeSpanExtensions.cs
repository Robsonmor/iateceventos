using System;

namespace IAtecAgenda.Domain.Extensions
{
    public static class TimeSpanExtensions
    {
        #region Extension Methods

        public static string ToTMO(this TimeSpan timeSpan)
        {
            var hh = ((int)timeSpan.TotalHours).ToString().PadLeft(2, '0');
            var mm = timeSpan.Minutes.ToString().PadLeft(2, '0');
            var ss = timeSpan.Seconds.ToString().PadLeft(2, '0');

            return $"{hh}:{mm}:{ss}";
        }

        #endregion
    }
}
