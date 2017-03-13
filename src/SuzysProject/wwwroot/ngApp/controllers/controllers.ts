
namespace SuzysProject.Controllers {

    export class HomeController {
           }

    export class BlogController {
        public blog;
        addBlog() {
            this.$http.get(`api/blog`, this.blog).then((response) => {
                this.$state.go(`home`)
            })
        }
        constructor(private $state: ng.ui.IStateService, private $http: ng.IHttpService) {
            $http.get(`/api/blog`).then((results) => {
                this.blog = results.data;
            });
        }
    }









    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }

    }
}