(function() {
    'use strict';

    function mobileMenu($window) {
        return {
            restrict: 'EA',
            scope: {
                ngShow: '='
            },
            link: function name(scope, element, attrs) {
                var window = angular.element($window),
                    parent = element.parent();
                window.bind('click', function(e) {
                    if (!parent[0].contains(e.target)) {
                        scope.ngShow = false;
                        scope.$apply();
                    }
                });
            }
        };
    }
    angular.module('blogModule').directive('hideMenuWhenClickedOutside', ['$window', mobileMenu]);
}());
