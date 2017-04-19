(function() {
'use strict';

    angular
        .module('blogModule')
        .controller('FilteredDataController', FilteredDataController);

    FilteredDataController.inject = ['sidebarService','filteredPosts'];
    function FilteredDataController(sidebarService,filteredPosts) {
        var vm = this;

        var filteredData = sidebarService.getSearchData();
        filteredPosts.filterByKeyword(filteredData[0]).$loaded()
            .then(function(response){
                //append data to the template
               vm.blogPosts = filteredPosts.filterPostsById(response);
               //clear search data arrat
                filteredData = sidebarService.clearSearchData();
            });
    }
})();
 