using System.Security.Cryptography;

namespace ContactsApp
{
    public class RsaKeyBuilder
    {
        public static RSAParameters Build()
        {
            using (var rsa = RSA.Create())
            {
                rsa.KeySize = 2048;
                return rsa.ExportParameters(true);
            }
        }
    }
}
