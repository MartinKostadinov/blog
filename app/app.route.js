(function() {
    'use strict';

    angular
        .module('blogModule', ['ngRoute', 'ngAria', 'firebase'])
        .config(['$routeProvider', '$locationProvider', config]); //create URLS and load Templates

    function config($routeProvider, $locationProvider) {
        var CONTROLLER_VIEW_MODEL_NAME = 'vm';
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/posts/posts.html',
                controller: 'postsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            //single post
            .when('/post/:id', {
                templateUrl: 'app/components/home/singlePost/singlePost.html',
                controller: 'singlePostController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        }); //invalid urls to redirect to home
        //$locationProvider.html5Mode(true);
    }

}());
