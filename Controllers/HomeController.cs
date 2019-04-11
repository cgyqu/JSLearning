using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace JsLearning.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Prop()
        {
            return View();
        }
        public IActionResult Scope()
        {
            return View();
        }
        public IActionResult Scope1()
        {
            return View();
        }
        public IActionResult Variable()
        {
            return View();
        }
        public IActionResult Change()
        {
            return View();
        }
        public IActionResult This()
        {
            return View();
        }
    }
}
