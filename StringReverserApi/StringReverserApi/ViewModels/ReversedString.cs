using System;

namespace StringReverserApi.ViewModels
{
    public class ReversedString
    {
        public string value { get; set; }
        public string reversed { get; set; }

        public ReversedString(string inValue, string inReversed)
        {
            value = inValue;
            reversed = inReversed;
        }
    }
}
