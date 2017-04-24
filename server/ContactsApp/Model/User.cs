using System;

namespace ContactsApp.Model
{
    public class User
    {
        private Guid _id;
        private string _username;
        private string _password;
        private string _firstName;
        private string _lastName;
        private string _email;

        public User(Guid id, string username, string password, string firstName, string lastName, string email)
        {
            _id = id;
            _username = username;
            _password = password;
            _firstName = firstName;
            _lastName = lastName;
            _email = email;
        }

        public Guid Id
        {
            get => _id;
            set => _id = value;
        }

        public string Username
        {
            get => _username;
            set => _username = value;
        }

        public string Password
        {
            get => _password;
            set => _password = value;
        }

        public string FirstName
        {
            get => _firstName;
            set => _firstName = value;
        }

        public string LastName
        {
            get => _lastName;
            set => _lastName = value;
        }

        public string Email
        {
            get => _email;
            set => _email = value;
        }
    }
}
