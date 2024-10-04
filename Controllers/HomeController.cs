using file_project.Models;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new RepresentativeModel();
        // Obtém a cultura atual e a adiciona ao ViewData
        var currentCulture = HttpContext.Features.Get<IRequestCultureFeature>()?.RequestCulture.Culture.Name;
        ViewData["CurrentCulture"] = currentCulture; // Adiciona a cultura atual ao ViewData
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

    public IActionResult Contato()
    {
        return View();
    }

    public IActionResult SaibaMais()
    {
        return View();
    }

    // Ações para as páginas de produtos específicos
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
        var newUrl = currentUrl.Value.Contains("/en") ? currentUrl.Value.Replace("/en", $"/{culture}") : $"/{culture}{currentUrl.Value}";

        return LocalRedirect(newUrl); // Use LocalRedirect para prevenir redirecionamento aberto
    }
}
