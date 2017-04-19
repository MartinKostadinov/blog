(function() {
    'use strict';
    angular.module('blogModule').directive('displayPosts', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/posts.template.html',
            controller: 'PostsController',
            controllerAs: 'vm',
            bindToController: true
        };
    });
}());
