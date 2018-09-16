using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StringReverserApi.Services;
using StringReverserApi.ViewModels;

namespace StringReverserApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReverserController : ControllerBase
    {
        PersistenceService _persistence = new PersistenceService();

        // GET all values
        [HttpGet]
        public IEnumerable<ReversedString> Get()
        {
            return _persistence.GetAllRecords();
        }

        // POST api/reverser - Store and return a reversed string
        [HttpPost]
        public ActionResult<ReversedString> Post([FromBody] string value)
        {
            if (!string.IsNullOrWhiteSpace(value))
            {
                return _persistence.ProcessAndPersistRecord(value);
            }
            return BadRequest();
        }
    }
}
