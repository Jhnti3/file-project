using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace file_project.Controllers
{
    public class ContatoController : Controller
    {
        private readonly IConfiguration _configuration;

        public ContatoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> EnviarEmail(string nome, string email, string telefone, string mensagem)
        {
            if (string.IsNullOrWhiteSpace(nome) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(mensagem))
            {
                TempData["Mensagem"] = "Por favor, preencha todos os campos obrigatórios.";
                return RedirectToAction("Index", "Home");
            }

            try
            {
                // Obtém valores do appsettings.json e verifica se não são nulos ou vazios
                string? smtpServer = _configuration["EmailSettings:SmtpServer"];
                string? smtpUser = _configuration["EmailSettings:Username"];
                string? smtpPass = _configuration["EmailSettings:Password"];
                string? smtpReceiver = _configuration["EmailSettings:Receiver"];
                string? smtpPortStr = _configuration["EmailSettings:Port"];

                if (string.IsNullOrWhiteSpace(smtpServer) ||
                    string.IsNullOrWhiteSpace(smtpUser) ||
                    string.IsNullOrWhiteSpace(smtpPass) ||
                    string.IsNullOrWhiteSpace(smtpReceiver) ||
                    string.IsNullOrWhiteSpace(smtpPortStr))
                {
                    TempData["Mensagem"] = "Erro na configuração do servidor de e-mail. Contate o suporte.";
                    return RedirectToAction("Index", "Home");
                }

                // Converte a porta para número inteiro com segurança
                if (!int.TryParse(smtpPortStr, out int smtpPort))
                {
                    TempData["Mensagem"] = "Erro na configuração da porta do servidor de e-mail.";
                    return RedirectToAction("Index", "Home");
                }

                var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpUser, smtpPass),
                    EnableSsl = true
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(smtpUser, "Contato do Site"),
                    Subject = "Novo contato recebido",
                    Body = $"Nome: {nome}\nEmail: {email}\nTelefone: {telefone}\nMensagem: {mensagem}",
                    IsBodyHtml = false
                };

                mailMessage.To.Add(smtpReceiver);

                await smtpClient.SendMailAsync(mailMessage);
                TempData["Mensagem"] = "E-mail enviado com sucesso!";
            }
            catch (Exception ex)
            {
                TempData["Mensagem"] = "Erro ao enviar o e-mail. Tente novamente mais tarde.";
                Console.WriteLine($"Erro ao enviar e-mail: {ex.Message}");
            }

            return RedirectToAction("Index", "Home");
        }
    }
}
