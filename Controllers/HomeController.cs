using file_project.Models;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        // Crie uma instância do HomeViewModel
        var model = new HomeViewModel
        {
            Representative = new RepresentativeModel(),
            Products = new List<ProductViewModel>
        {
            new ProductViewModel { Icon = "fas fa-spine", Title = "Coluna", Image = "/images/coluna.jpg", Description = "Sistemas e dispositivos para coluna e região torácica" },
            // ... adicione os outros produtos aqui
        }
        };

        var currentCulture = HttpContext.Features.Get<IRequestCultureFeature>()?.RequestCulture.Culture.Name;
        ViewData["CurrentCulture"] = currentCulture;

        return View(model); // Retorne o modelo do tipo HomeViewModel para a View
    }


    public IActionResult Produtos()
    {
        return View();
    }

    public IActionResult Diretrizes()
    {
        return View();
    }

    public IActionResult Contato()
    {
        return View();
    }

    public IActionResult SaibaMais()
    {
        ViewBag.AboutUsText = "Seu texto sobre a empresa aqui...";
        return View();
    }

    //// Ações para as páginas de produtos específicos

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

    public IActionResult ChangeLanguage(string culture, string returnUrl)
    {
        var cultureCookieValue = CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture));
        var cookieOptions = new CookieOptions
        {
            Expires = DateTimeOffset.UtcNow.AddYears(1),
            IsEssential = true,
            HttpOnly = true,
            SameSite = SameSiteMode.Lax
        };

        Response.Cookies.Append(CookieRequestCultureProvider.DefaultCookieName, cultureCookieValue, cookieOptions);

        // Manipula a URL para garantir que a cultura seja adicionada corretamente
        var currentUrl = HttpContext.Request.Path;
        var currentUrlValue = currentUrl.Value ?? "/"; // Garante que não seja null
        var newUrl = currentUrlValue.Contains("/en") ? currentUrlValue.Replace("/en", $"/{culture}") : $"/{culture}{currentUrlValue}";


        return LocalRedirect(newUrl); // Use LocalRedirect para prevenir redirecionamento aberto
    }
}
