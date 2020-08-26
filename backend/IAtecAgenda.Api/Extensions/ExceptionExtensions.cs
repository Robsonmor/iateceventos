using System;
using System.Collections.Generic;

namespace IAtecAgenda.Api.Extensions
{
    public static class ExceptionExtensions
    {
        public static IEnumerable<Exception> GetInnerExceptions(this Exception ex)
        {
            CheckInnerException(ex);

            var innerException = ex;
            do
            {
                yield return innerException;
                innerException = innerException.InnerException;
            }
            while (innerException != null);
        }

        private static void CheckInnerException(Exception ex)
        {
            if (ex == null)
                throw new ArgumentNullException(nameof(ex));
        }
    }
}
