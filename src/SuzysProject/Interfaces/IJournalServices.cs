using System.Collections.Generic;
using SuzysProject.Models;

namespace SuzysProject.Services
{
    public interface IJournalServices
    {
        object _entry { get; }

        void AddEntry(JournalEntry journalEntry);
        void DeleteEntry(int id);
        List<JournalEntry> GetAllEntries();
        JournalEntry getJournal(int id);
    }
}