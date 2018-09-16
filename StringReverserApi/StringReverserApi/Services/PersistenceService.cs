using StringReverserApi.Models;
using StringReverserApi.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace StringReverserApi.Services
{
    public class PersistenceService
    {
        public IEnumerable<ReversedString> GetAllRecords()
        {
            using (var context = new ModelContext())
            {
                return context.Records.Select(x => new ReversedString(x.Value, x.Reversed)).ToList();
            }
        }

        public ReversedString ProcessAndPersistRecord(string value)
        {
            var newRecord = new ReversedStringDb(value);
            using (var db = new ModelContext())
            {
                db.Records.Add(newRecord);
                db.SaveChanges();
            }
            return new ReversedString(newRecord.Value, newRecord.Reversed);
        }
    }
}
