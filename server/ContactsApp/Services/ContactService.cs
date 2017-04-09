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
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public void CreateContact(Contact contact)
        {
            _contacts.Add(new Contact(
                GetId(),
                contact.FirstName,
                contact.LastName,
                contact.Phone,
                contact.StreetAddress,
                contact.City));
        }

        public void UpdateContact(int id, Contact contact)
        {
            var index = _contacts.FindIndex(c => c.Id == id);
            _contacts[index] = contact;
        }

        public void DeleteContact(int id)
        {
            _contacts.RemoveAll(c => c.Id == id);
        }

        private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(c => c.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }
    }
}
