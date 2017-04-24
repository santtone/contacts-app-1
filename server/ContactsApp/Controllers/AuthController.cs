using System;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using ContactsApp.Controllers.Communication;
using ContactsApp.Model;
using ContactsApp.Services;
using Microsoft.IdentityModel.Tokens;

namespace ContactsApp.Controllers
{
    [Route("api/authenticate")]
    public class AuthController : Controller
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            var user = _userService.FindUserByUsername(authRequest.Username);
            if (user != null)
            {
                var now = DateTime.Now;
                var expires = now + TokenOptions.ExpiresSpan;
                var token = GenerateToken(user, expires);
                return new JsonResult(new AuthResponse(user, token));
            }
            return Unauthorized();

        }

        private string GenerateToken(User user, DateTime expires)
        {
            var handler = new JwtSecurityTokenHandler();

            var identity = new ClaimsIdentity(
                new GenericIdentity(user.Username, "TokenAuth"),
                new[]
                {
                    new Claim("ID", user.Id.ToString())
                }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenOptions.Issuer,
                Audience = TokenOptions.Audience,
                SigningCredentials = TokenOptions.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
