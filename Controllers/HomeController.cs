using file_project.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace TechnicareWebsite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // Crie uma inst�ncia do modelo para passar para a vis�o
            var model = new RepresentativeModel();
            return View(model);
        }

        public IActionResult Produtos()
        {
            return View();
        }

        public IActionResult Diretrizes()
        {
            return View();
        }

        public IActionResult Premios()
        {
            return View();
        }

        public IActionResult Distribuidores()
        {
            return View();
        }

        public IActionResult Calendario()
        {
            return View();
        }

        public IActionResult Educacao()
        {
            return View();
        }

        public IActionResult Institucional()
        {
            return View();
        }

        public IActionResult Contato()
        {
            return View();
        }

        public IActionResult SaibaMais()
        {
            return View();
        }

        // A��es para as p�ginas de produtos espec�ficos
        public IActionResult ProdutoColuna()
        {
            return View();
        }

        public IActionResult ProdutoCranio()
        {
            return View();
        }

        public IActionResult ProdutoEquipamento()
        {
            return View();
        }

        public IActionResult ProdutoInstrumental()
        {
            return View();
        }

        public IActionResult Education()
        {
            return View();
        }

        // M�todo de erro para tratamento de exce��es (recomend�vel)
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult Submit(RepresentativeModel model)
        {
            if (ModelState.IsValid)
            {
                // Process the form submission
                // You might want to save to a database or send an email here
                return RedirectToAction("ThankYou");
            }
            return View("Index", model);
        }

        public IActionResult ThankYou()
        {
            return View();
        }
    }
}
