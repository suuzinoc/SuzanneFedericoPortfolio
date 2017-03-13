using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SuzysProject.Services;
using SuzysProject.Models;

namespace SuzysProject.API
{
    [Route("api/[controller]")]
    public class EntriesController : Controller
    {
        public IJournalServices _services;

        public EntriesController(IJournalServices services) //entries controller is interfacing with the journal services
        {
            _services = services;
        }

        // GET: api/values
        [HttpGet]
        public List<JournalEntry> Get() //gets first get method
        {
            return _services.GetAllEntries();    
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_services.getJournal(id));
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]JournalEntry journalEntry)
        {
            _services.AddEntry(journalEntry);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _services.DeleteEntry(id);
        }
    }
}
