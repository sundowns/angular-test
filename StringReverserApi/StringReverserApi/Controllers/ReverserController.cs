using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StringReverserApi.Models;

namespace StringReverserApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReverserController : ControllerBase
    {
        // GET all values
        [HttpGet]
        public ActionResult<IEnumerable<ReversedString>> Get()
        {
            return new ReversedString[] { new ReversedString("test1"), new ReversedString("test2"), new ReversedString("Another one")};
        }

        // POST api/reverser - Store and return a reversed string
        [HttpPost]
        public ActionResult<ReversedString> Post([FromBody] string value)
        {
            if (!string.IsNullOrWhiteSpace(value))
            {
                return new ReversedString(value);
            }
            return BadRequest();
        }
    }
}
