using Microsoft.EntityFrameworkCore;
using System;

namespace StringReverserApi.Models
{
    public class ModelContext : DbContext
    {
        public DbSet<ReversedStringDb> Records { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=records.db");
        }
    }

    public class ReversedStringDb
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public string Reversed { get; set; }

        public ReversedStringDb(string value)
        {
            Value = value;
            ComputeReversed();
        }

        public void ComputeReversed()
        {
            char[] chars = Value.ToCharArray();
            Array.Reverse(chars);
            Reversed = new string(chars);
        }
    }
}
