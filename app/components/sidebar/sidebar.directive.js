(function() {
    'use strict';
    angular.module('blogModule').directive('searchPosts', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/sidebar/sidebar.view.html',
            replace: true,
            controller: 'SideBarController',
            controllerAs: 'vm',
            scope: true,
            bindToController: true
        };
    });
}());
