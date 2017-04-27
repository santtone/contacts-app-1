using System;
using System.Collections.Generic;
using System.Linq;
using ContactsApp.Model;

namespace ContactsApp.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly List<User> _users;

        public UserRepository()
        {
            _users = new List<User>
            {
                new User(new Guid(),"santtone","salasana","Sami","Anttonen","sami.anttonen@saimia.fi")
            };
        }

        public User FindByUsername(string username)
        {
            return _users.FirstOrDefault(u => u.Username == username);
        }

        public User FindByUsernameAndPassword(string username, string password)
        {
            return _users.FirstOrDefault(u => u.Username == username && u.Password == password);
        }
    }
}
