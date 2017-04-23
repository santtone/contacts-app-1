using System;
using System.Collections.Generic;
using System.IdentityModel.Selectors;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsApp.Controllers.Communication
{
    public class AuthRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }

        public AuthRequest(string username, string password)
        {
            Username = username;
            Password = password;
        }
    }
}
