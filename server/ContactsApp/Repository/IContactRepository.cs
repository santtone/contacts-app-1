using System.Collections.Generic;
using ContactsApp.model;

namespace ContactsApp.Repository
{
    public interface IContactRepository
    {
        List<Contact> FindAll();
    }
}
