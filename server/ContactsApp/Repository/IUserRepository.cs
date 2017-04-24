using ContactsApp.Model;

namespace ContactsApp.Repository
{
    public interface IUserRepository
    {
        User FindByUsername(string username);
    }
}
