using System;

namespace StringReverserApi.Models
{
    public class ReversedString
    {
        public string value { get; set; }
        public string reversed { get; set; }

        public ReversedString(string inValue)
        {
            value = inValue;
            ComputeReversed();
        }

        public void ComputeReversed()
        {
            char[] chars = value.ToCharArray();
            Array.Reverse(chars);
            reversed = new string(chars);
        }
    }
}
