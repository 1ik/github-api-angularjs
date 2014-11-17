'use restrict';

angular.module('githubClient').filter('paginate',function(){
    return function(items,page_number,limit){

        if(page_number == undefined || items.length <= 5) {
            return items;
        }


        var new_items = [];
        var start_index = (page_number-1) * limit;
        var end_index = start_index + limit;

        for(var i=start_index; i<end_index; i++) {
            new_items.push(items[i]);
        }
        return new_items;
    }
});