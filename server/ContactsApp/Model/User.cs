using System;
using System.ComponentModel.DataAnnotations;

namespace ContactsApp.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public User() { }

        public User(int id, string username, string password, string firstName, string lastName, string email)
        {
            Id = id;
            Username = username;
            Password = password;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }

        public User(string username, string password, string firstName, string lastName, string email)
        {
            Username = username;
            Password = password;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }
    }
}
