using Microsoft.AspNetCore.Mvc;
using ContactsApp.Config;
using ContactsApp.Controllers.Communication;
using ContactsApp.Services;

namespace ContactsApp.Controllers
{
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            var user = _userService.FindUserByUsernameAndPassword(authRequest.Username, authRequest.Password);
            if (user == null) return Unauthorized();
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    }
}
