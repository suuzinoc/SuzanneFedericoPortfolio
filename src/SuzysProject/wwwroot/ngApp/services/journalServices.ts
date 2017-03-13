namespace SuzysProject.Services {

    export class JournalService {
        public resource = "/api/entries/"; //route to our server side controller (journalEntryController)

        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
        }
        public getJournals() { //this method gets the httpget all of my journalentry to our view
            return this.$http.get(this.resource);//route to our service side api/[controller] on journalEntry controller
        }

        public addEntry(entry) {
            this.$http.post(this.resource, entry).then((response) => {
                this.$state.go("suzy");
            })
        }
        public removeEntry() {
            this.$http.delete(this.resource + this.$stateParams["id"]).then((response) => {
                this.$state.go("suzy");
            })
        }
        public editEntry(entry) {
            this.$http.post(this.resource, entry).then((response) => {
                this.$state.go("suzy");
            })
        }
    }
    angular.module("SuzysProject").service("JournalService", JournalService);



}
