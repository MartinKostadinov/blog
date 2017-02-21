(function() {
'use strict';

    angular
        .module('blogModule')
        .controller('FilteredDataController', FilteredDataController);

    FilteredDataController.inject = ['sidebarService','filteredPosts'];
    function FilteredDataController(sidebarService,filteredPosts) {
        var vm = this;
        //var data = 'lorem';
        var filteredData = sidebarService.getSearchData();
        var filterPosts = filteredPosts.filterByKeyword(filteredData[0]).$loaded()
            .then(function(response){
                //append data to the template
               vm.filteredPosts = filteredPosts.filterPostsById(response);
               //clear search data arrat
                filteredData = sidebarService.clearSearchData();
            });
    }
})();
 