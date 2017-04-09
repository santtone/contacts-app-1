using System.Collections.Generic;
using System.Linq;
using ContactsApp.model;

namespace ContactsApp.Services
{
    public class ContactService : IContactService
    {
        private readonly List<Contact> _contacts;

        public ContactService()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Sami", "Anttonen", "0401234567", "Skinnarilankatu 36", "Lappeenranta"),
                new Contact(2, "Jouni", "Könönen", "0407654321", "Skinnarilankatu 36", "Lappeenranta")
            };
        }

        public List<Contact> FindAllContacts()
        {
            return _contacts;
        }

        public Contact FindContactById(int id)
        {
            return _contacts.FirstOrDefault(contact => contact.Id == id);
        }

        public void SaveContact(Contact contact)
        {
            _contacts.Add(new Contact(
                GetId(),
                contact.FirstName,
                contact.LastName,
                contact.Phone,
                contact.StreetAddress,
                contact.City));
        }

        private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }
    }
}
