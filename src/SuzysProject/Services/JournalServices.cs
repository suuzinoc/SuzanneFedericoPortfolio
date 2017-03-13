using SuzysProject.Models;
using SuzysProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuzysProject.Services
{
    public class JournalServices :IJournalServices
    {
        private IGenericRepo _repo;

        public object _entry { get; private set; }

        public JournalServices(IGenericRepo repo)
        {
            _repo = repo;
        }
        //get a singular object by the id
        public JournalEntry getJournal(int id)
        {
            var journalEntry = _repo.Query<JournalEntry>().Where(j => j.Id == id).FirstOrDefault();
            return journalEntry;
        }

        //return all entries
        public List<JournalEntry> GetAllEntries()
        {
            var entry = _repo.Query<JournalEntry>().ToList();
            return entry;

            //return entries;           
        }
        //public void AddEntry(JournalEntry journalEntry)
        //{
        //    if (journalEntry.Id == 0)
        //    {
        //        _repo.Add(journalEntry);
        //    }
        //    else
        //    {
        //        _repo.Update(journalEntry);
        //    }
        //}
        //delete entry
        public void DeleteEntry(int id)
        {
            var entry = _repo.Query<JournalEntry>().Where(j => j.Id == id).FirstOrDefault();
            _repo.Delete(entry);
        }

        public void AddEntry(JournalEntry journalEntry)
        {
            throw new NotImplementedException();
        }
    }
}

