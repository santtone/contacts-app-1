using ContactsApp.model;
using Microsoft.EntityFrameworkCore;

namespace ContactsApp
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options) { }
        public DbSet<Contact> Contact { get; set; }
    }
}
