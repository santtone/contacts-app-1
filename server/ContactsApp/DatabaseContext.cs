using ContactsApp.model;
using ContactsApp.Model;
using Microsoft.EntityFrameworkCore;

namespace ContactsApp
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options) { }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<User> User { get; set; }
    }
}
