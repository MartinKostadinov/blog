(function () {
    'use strict';

    angular
        .module('blogModule')
        .controller('SideBarController', SideBarController);

    SideBarController.inject = ['sidebarService', '$routeParams, $route', '$location'];
    function SideBarController(sidebarService, $routeParams, $route, $location) {
        var vm = this;
        vm.mostLiked = sidebarService.mostLikedPosts('posts');
        vm.searchPost = searchPost;

        function searchPost(inputData) {
            //make the inputData to contains only lowercase letters, and remove white space
            var dataToLowerCase = inputData.toLowerCase().trim();
            $location.path('/filter');
            sidebarService.addSearchData(dataToLowerCase);
        }
    }
})();
