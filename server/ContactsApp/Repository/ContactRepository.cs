using System.Collections.Generic;
using System.Linq;
using ContactsApp.model;

namespace ContactsApp.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly DatabaseContext _context;

        public ContactRepository(DatabaseContext context)
        {
            _context = context;
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contact.ToList();
            return contacts;
        }
    }
}
