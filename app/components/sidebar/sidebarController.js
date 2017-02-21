(function() {
'use strict';

    angular
        .module('blogModule')
        .controller('SideBarController', SideBarController);

    SideBarController.inject = ['sidebarService','$routeParams, $route','$location','$scope'];
    function SideBarController(sidebarService, $routeParams, $route, $location,$scope) {
        var vm = this;
        vm.mostLiked = sidebarService.mostLikedPosts('posts');
        vm.searchPost = function(data) {
            $location.path('/filter');
            sidebarService.addSearchData(data);
        };
    }
})();
