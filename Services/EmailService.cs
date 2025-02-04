using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using file_project.Models;


namespace file_project.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string fromName, string fromEmail, string subject, string message);
    }

    public class EmailService : IEmailService
    {
        private readonly SmtpSettings _smtpSettings;

        public EmailService(IOptions<SmtpSettings> smtpSettings)
        {
            _smtpSettings = smtpSettings.Value;
        }

        public async Task SendEmailAsync(string fromName, string fromEmail, string subject, string message)
        {
            using (var client = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port))
            {
                client.Credentials = new NetworkCredential(_smtpSettings.Username, _smtpSettings.Password);
                client.EnableSsl = _smtpSettings.EnableSsl;

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_smtpSettings.Username, fromName),
                    Subject = subject,
                    Body = $"<p><strong>Nome:</strong> {fromName}</p><p><strong>Email:</strong> {fromEmail}</p><p>{message}</p>",
                    IsBodyHtml = true
                };

                mailMessage.To.Add(_smtpSettings.Username); // E-mail da empresa que vai receber a mensagem

                await client.SendMailAsync(mailMessage);
            }
        }
    }
}
