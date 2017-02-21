(function() {
    'use strict';

    angular
        .module('blogModule')
        .factory('getPostsService', ['$firebaseArray', '$firebaseObject','$q', postsService]);

/**
 * FIREBASE CONFIG
 */
    firebase.initializeApp(config);

    function postsService($firebaseArray, $firebaseObject, $q) {
        var service = {
            getPosts: getPosts,
            getSinglePost: getSinglePost,
            likes: likes,
            loadMore : loadMore
        };
        var postsLenght;

        return service;

        //////////////////
        function loadMore (start, end) {
            var ref = firebase.database().ref();
            var query = ref.child('posts').orderByChild('id').startAt(start).endAt(end);
            var defered = $q.defer();
            var more = $firebaseArray(query);
            // defered.resolve(more);
            // console.log(more);
            return more;
        }
        function getPosts(post) {
            var ref = firebase.database().ref();
            var query =ref.child(post).limitToLast(2);//download  the 5 most recent posts
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
