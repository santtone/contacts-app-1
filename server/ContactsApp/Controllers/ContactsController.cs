using System.Collections.Generic;
using ContactsApp.model;
using ContactsApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactsApp.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;


        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET api/contacts
        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }

        // GET api/contacts/1
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactService.SaveContact(contact);
        }

        // DELETE api/contacts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
