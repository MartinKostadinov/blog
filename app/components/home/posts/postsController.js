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

        vm.loadMore = function () {   
                var start = vm.blogPosts[0].id -3;
                var end  = vm.blogPosts[0].id -1; 
                vm.test2 = getPostsService.loadMore(start, end).$loaded().then(function(response){       
                     var updateVmBlogposts = vm.blogPosts.concat(response);
                     vm.blogPosts = updateVmBlogposts;
                });
        
        };
    }

}());
