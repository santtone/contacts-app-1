using ContactsApp.Model;

namespace ContactsApp.Services
{
    public interface IUserService
    {
        User FindUserByUsername(string username);
    }
}
