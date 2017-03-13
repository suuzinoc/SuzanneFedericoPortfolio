namespace SuzysProject {

    angular.module('SuzysProject', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('myHome', {
                url: '/',
                templateUrl: '/ngApp/views/myHome.html',
                controller: SuzysProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('handDrawn', {
                url: '/handDrawn',
                templateUrl: '/ngApp/views/handDrawn.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('3D', {
                url: '/3D',
                templateUrl: '/ngApp/views/3D.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('Computer', {
                url: '/computer',
                templateUrl: '/ngApp/views/computer.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: '/ngApp/views/projects.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })
            .state('AboutMe', {
                url: '/aboutMe',
                templateUrl: '/ngApp/views/aboutMe.html',
                controller: SuzysProject.Controllers.JournalController,
                controllerAs: 'controller'
            })














            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });


    angular.module('SuzysProject').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );
    angular.module('SuzysProject').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
}
