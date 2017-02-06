(function() {
    'use strict';

    angular
        .module('blogModule')
        .factory('getPostsService', ['$firebaseArray', '$firebaseObject', postsService]);

    // FIREBASE CONFIG HERE
    /////////////////
    firebase.initializeApp(config);

    function postsService($firebaseArray, $firebaseObject) {
        var service = {
            getPosts: getPosts,
            getSinglePost: getSinglePost,
            likes: likes
        };

        return service;

        //////////////////

        function getPosts(posts) {
            var ref = firebase.database().ref().child(posts);
            var posts = $firebaseArray(ref);
            return posts;
        }

        function getSinglePost(postId) {
            var ref = firebase.database().ref().child(postId);
            var singlePost = $firebaseObject(ref);
            return singlePost;
        }

        function likes(blogPost, posts) {
            var ref = firebase.database().ref().child(posts);
            ref.child('id' + blogPost.id).update({
                likes: blogPost.likes += 1
            });
        }

    }

}());
