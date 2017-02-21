(function() {
'use strict';

    angular
        .module('blogModule')
        .factory('filteredPosts', filteredPosts);

    filteredPosts.inject = ['$firebaseArray', '$firebaseObject','$q'];
    function filteredPosts($firebaseArray,$firebaseObject, $q) {
        var service = {
            filterByKeyword : filterByKeyword,
            filterPostsById : filterPostsById
        };
        //filter posts data by keyword from search
          function filterByKeyword (tags) {
            var ref = firebase.database().ref();
            var query = ref.child('tags').child(tags);
            var filterByTag = $firebaseObject(query);
            return filterByTag;
        }
        //filter full posts by id
        function filterPostsById (postsArray) {
            var ref = firebase.database().ref();           
            var filteredPosts = [];
               angular.forEach(postsArray, function(id){
                    var query = ref.child('posts').child(id);
                         var postObj = $firebaseObject(query);
                                    filteredPosts.push(postObj );
                    });              
            return filteredPosts;
        }
        return service;
    }
})();