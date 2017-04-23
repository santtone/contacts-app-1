using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Controllers.Communication
{
    public class AuthResponse
    {
        public User User { get; set; }
        public string Token { get; set; }

        public AuthResponse(User user, string token)
        {
            User = user;
            Token = token;
        }
    }
}
