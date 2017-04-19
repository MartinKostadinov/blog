(function () {
    'use strict';

    angular
        .module('blogModule')
        .controller('PostsController', PostsController);

    PostsController.inject = ['$route', '$location', '$window', 'getPostsService'];
    function PostsController($route, $location, $window, getPostsService) {
        var vm = this;
        // getPosts
        vm.blogPosts = getPostsService.getPosts();
        vm.menu = mobileMneu;
        vm.increaseLikes = increaseLikes;
        vm.loadMore = loadMorePosts;
        
        function mobileMneu () {
            if (!vm.showMenu) {
                vm.showMenu = true;
            } else {
                vm.showMenu = false;
            }
        }
        // Likes and dislikes functionality
        function increaseLikes (findPost) {
            getPostsService.likes(findPost, 'posts');
        }
        //load more posts
        function loadMorePosts () {
            var start = vm.blogPosts[0].id - 3;
            var end = vm.blogPosts[0].id - 1;
            vm.loadPosts = getPostsService.loadMore(start, end).$loaded().then(function (response) {
                var updateVmBlogposts = response.concat(vm.blogPosts);
                vm.blogPosts = updateVmBlogposts;
            });
        }
    } 

}());
