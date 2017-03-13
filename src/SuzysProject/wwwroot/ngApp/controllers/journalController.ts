namespace SuzysProject.Controllers {

    export class JournalController {
        public journals;
        public entry;
        public search: string;

        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private JournalService: SuzysProject.Services.JournalService,
            private $state: ng.ui.IStateService
        ) {
            this.getJournals();
        }
        public getJournals() {
           this.JournalService.getJournals().then((res) => {
                this.journals = res.data;
            });
        }
        public addEntry() {
            this.JournalService.addEntry(this.entry);
        }
        public removeEntry() {
            this.entry = this.JournalService.removeEntry();
        }
        public editEntry() {
            this.JournalService.editEntry(this.entry);
        }
    }
    export class EditRemoveJournalController {
        public entry;

        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private JournalService: SuzysProject.Services.JournalService,
            private $state: ng.ui.IStateService
        ) {
            this.$http.get("/api/entries/" + $stateParams["id"]).then((response) => {
                this.entry = response.data;
            })
        }

        public editEntry() {
            this.JournalService.editEntry(this.entry);
        }
        public removeEntry() {
            this.entry = this.JournalService.removeEntry();
        }
    }
}


