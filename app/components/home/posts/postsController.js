(function() {
    'use strict';

    angular
        .module('blogModule')
        .controller('postsController', ['$route', '$location', '$window', 'getPostsService', postsController]);

    function postsController($route, $location, $window, getPostsService) {
        var vm = this;
        // getPosts
        vm.blogPosts = getPostsService.getPosts('posts');
        vm.menu = function() {
            if (!vm.showMenu) {
                vm.showMenu = true;
            } else {
                vm.showMenu = false;
            }
        };

        // Likes and dislikes functionality
        vm.increaseLikes = function(findPost) {
            getPostsService.likes(findPost, 'posts');
        };
    }

}());
