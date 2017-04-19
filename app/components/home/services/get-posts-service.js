(function() {
    'use strict';

    angular
        .module('blogModule')
        .factory('getPostsService', getPostsService);

    var config = {
        //ANGULAR FIRE CONFIG HERE
    };
    firebase.initializeApp(config);
    
    getPostsService.inject = ['$firebaseArray', '$firebaseObject'];
    function getPostsService($firebaseArray, $firebaseObject) {
        var service = {
            getPosts: getPosts,
            getSinglePost: getSinglePost,
            likes: likes,
            loadMore : loadMore
        };

        return service;

        //////////////////
        function loadMore (start, end) {
            var ref = firebase.database().ref();
            var query = ref.child('posts').orderByChild('id').startAt(start).endAt(end);
            var more = $firebaseArray(query);
            return more;
        }
        function getPosts() {
            var ref = firebase.database().ref();
            var query =ref.child('posts').limitToLast(2);//download  the  most recent posts
            var posts = $firebaseArray(query);
    
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