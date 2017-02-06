(function() {
    'use strict';
    angular.module('blogModule').directive('searchPosts', function() {
        return {
            restrict: 'EA',
            templateUrl: 'app/components/sidebar/sidebarView.html',
            replace: true
        };
    });
}());
