(function() {
    'use strict';
    angular.module('blogModule').directive('displayFilteredPosts', function() {
        return {
            restrict: 'EA',
            templateUrl: 'app/shared/posts.template.html',
            controller: 'FilteredDataController',
            controllerAs: 'vm',
            bindToController: true
        };
    });
}());
