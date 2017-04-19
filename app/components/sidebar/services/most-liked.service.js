(function() {
'use strict';

    angular
        .module('blogModule')
        .factory('sidebarService', sidebarService);
        
    sidebarService.inject = ['$firebaseArray', '$firebaseObject'];
    function sidebarService($firebaseArray,$firebaseObject) {
        var service ={
            mostLikedPosts : mostLikedPosts,
            addSearchData : addSearchData,
            getSearchData : getSearchData,
            clearSearchData : clearSearchData
        };

        var searchData = [];
        //get the 3 post with most likes
        function mostLikedPosts(posts) { 
            var ref = firebase.database().ref();
            var query = ref.child(posts).orderByChild('likes').limitToLast(3);
            var likes = $firebaseArray(query);
            return likes;
        }

        //share Search input from sidebar Search input 
        function addSearchData (data) {
            searchData.push(data);
        }

        //get search data
        function getSearchData () {
            return searchData;
        }

        function clearSearchData () {
            searchData = [];
        }
        //filter by keyword

      
        return service;
    }
})();
