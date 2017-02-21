(function() {
    'use strict';

    angular
        .module('blogModule')
        .controller('singlePostController', ['$routeParams', '$firebaseObject', 'getPostsService', singlePost]);

    function singlePost($routeParams, $firebaseObject, getPostsService) {
        var vm = this;
        var  postID = "posts/" + 'id' + $routeParams.id;
        vm.blogPost = getPostsService.getSinglePost(postID);
        vm.increaseLikes = function(findPost) {
            getPostsService.likes(findPost, 'posts');
        };
    }

}());
