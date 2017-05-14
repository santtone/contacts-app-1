using Microsoft.IdentityModel.Tokens;
using System;
using System.Security.Cryptography;


namespace ContactsApp.Config
{
    public class TokenOptions
    {
        public static string Audience { get; } = "ekoodi-audience";
        public static string Issuer { get; } = "ekoodi-issuer";
        public static RsaSecurityKey Key { get; } = new RsaSecurityKey(Rsa());
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);
        public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(1);
        public static string TokenType { get; } = "Bearer";

        private static RSA Rsa()
        {
            using (var rsa = RSA.Create())
            {
                rsa.KeySize = 2048;
                return rsa;
            }
        }
    }
}
