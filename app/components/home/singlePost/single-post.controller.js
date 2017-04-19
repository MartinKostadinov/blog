(function () {
    'use strict';

    angular
        .module('blogModule')
        .controller('SinglePostController', SinglePostController);

    SinglePostController.inject = ['$routeParams', '$firebaseObject', 'getPostsService'];
    function SinglePostController($routeParams, $firebaseObject, getPostsService) {
        var vm = this;
        var postID = "posts/" + 'id' + $routeParams.id;

        vm.increaseLikes = increaseLikes;
        vm.blogPost = getPostsService.getSinglePost(postID);
 
        //increase likes on click
        function increaseLikes(findPost) {
            getPostsService.likes(findPost, 'posts');
        }
    }

}());
