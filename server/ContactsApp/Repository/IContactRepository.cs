using System.Collections.Generic;
using ContactsApp.model;

namespace ContactsApp.Repository
{
    public interface IContactRepository
    {
        List<Contact> FindAll();
        Contact FindById(int id);
        void Create(Contact contact);
        void Update(Contact contact);
        void Delete(int id);
    }
}
