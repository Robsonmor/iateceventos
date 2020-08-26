namespace IAtecAgenda.Core.Extensions
{
    public static class IntegerExtensions
    {
        public static bool In(this int value, params int[] stringValues)
        {
            foreach (int otherValue in stringValues)
                if (value == otherValue)
                    return true;

            return false;
        }
    }
}
