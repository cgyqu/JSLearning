using System;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace JsLearning.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class HomeController:ControllerBase
    {
        [Route("index")]
        public string Index()
        {
            return "this is test";
        }
        

    }
}