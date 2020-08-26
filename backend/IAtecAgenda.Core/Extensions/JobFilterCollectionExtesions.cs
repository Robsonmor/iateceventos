using Hangfire;
using Hangfire.Common;

namespace IAtecAgenda.Core.Extensions
{
    public static class JobFilterCollectionExtesions
    {
        public static JobFilterCollection DisableConcurrentExecution(this JobFilterCollection source, int timeoutInSeconds = 300)
        {
            source.Add(new DisableConcurrentExecutionAttribute(timeoutInSeconds));
            return source;
        }

        public static JobFilterCollection AutomaticRetry(this JobFilterCollection source, int attempts = 10, AttemptsExceededAction onAttemptsExceeded = AttemptsExceededAction.Fail, int[] delaysInSeconds = null)
        {
            source.Add(new AutomaticRetryAttribute()
            {
                Attempts = attempts,
                OnAttemptsExceeded = onAttemptsExceeded,
                DelaysInSeconds = delaysInSeconds
            });
            return source;
        }
    }

}
