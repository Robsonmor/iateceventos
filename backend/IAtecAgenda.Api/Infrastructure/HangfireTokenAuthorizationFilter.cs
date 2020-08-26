using Hangfire.Dashboard;
using Hangfire.Annotations;

namespace IAtecAgenda.Api.Infrastructure
{
    public class HangfireTokenAuthorizationFilter : IDashboardAuthorizationFilter
    {
        #region Public Static Methods

        public static HangfireTokenAuthorizationFilter Create()
        {
            return new HangfireTokenAuthorizationFilter();
        }

        #endregion

        #region IDashboardAuthorizationFilter Members

        public bool Authorize([NotNull] DashboardContext context) => true;

        #endregion
    }
}
