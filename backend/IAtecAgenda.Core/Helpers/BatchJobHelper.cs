using Hangfire;
using System;
using System.Linq.Expressions;

namespace IAtecAgenda.Core.Helpers
{
    public sealed class BatchJobHelper
    {
        #region Public Static Methods

        public static BatchTask Enqueue<TDataExtraction>(Expression<Action<TDataExtraction>> methodCall)
        {
            var parentJobId = BackgroundJob.Enqueue(methodCall);
            return new BatchTask(parentJobId);
        }

        #endregion
    }

    public sealed class BatchTask
    {
        #region Private Read-Only Fields

        private string _parentJobId;        

        #endregion

        #region Constructors

        public BatchTask(string parentJobId)
        {
            _parentJobId = parentJobId ?? throw new ArgumentNullException(nameof(parentJobId));
        }

        #endregion

        #region Public Methods

        public BatchTask ContinueWith<T>(Expression<Action<T>> methodCall, JobContinuationOptions options = JobContinuationOptions.OnAnyFinishedState)
        {
            _parentJobId = BackgroundJob.ContinueJobWith<T>(_parentJobId, methodCall, options);
            return this;
        }

        #endregion
    }
}
