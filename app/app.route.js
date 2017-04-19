(function () {
    'use strict';

    angular
        .module('blogModule', ['ngRoute', 'ngAria', 'firebase'])
        .config(['$routeProvider', '$locationProvider', config]);
    //create URLS and load Templates
    function config ($routeProvider) {
        var CONTROLLER_VIEW_MODEL_NAME = 'vm';
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/posts/posts.html',
                controller: 'PostsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME,
            })
            //single post
            .when('/post/:id', {
                templateUrl: 'app/components/home/singlePost/single-post.html',
                controller: 'SinglePostController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            //filtered posts
            .when('/filter', {
                templateUrl: 'app/components/sidebar/filtered-posts.template.html',
                controller: 'FilteredDataController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }

}());
