using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Services
{
    public interface IUserService
    {
        User FindUserByUsername(string username);
    }
}
