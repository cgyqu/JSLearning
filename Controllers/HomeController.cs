using System;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace JsLearning.Controllers
{
    [Route("api/{controller}/{action}")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public string Get()
        {
            return "this is test";
        }
        public dynamic Post([FromBody] Test test)
        {
            return new { data = test, message = "请求成功", success = "true" };
        }

        public string CrossTest(int id, string callback)
        {
            var obj = new { id };
            string json = JsonConvert.SerializeObject(obj);
            if (!string.IsNullOrEmpty(callback))
            {
                json = $"{callback}({json})";
            }
            return json;
        }

    }
    public class Test
    {
        public int Id { get; set; }

        public String Name { get; set; }

    }
}