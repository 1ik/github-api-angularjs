'use strict';

angular.module('githubClient')
    .controller('SearchCtrl', [ '$scope', '$timeout', 'RepositorySearch', '$http', function ($scope,$timeout, RepositorySearch, $http) {
        $scope.appTitle = 'Simple github client';

        var delay;

        $scope.$watch('repository_name', function(newRepoName) {
            if(newRepoName) {

                if(delay) {
                    $timeout.cancel(delay);
                }

                delay = $timeout(function(){
                    $scope.loading = true;
                    RepositorySearch.searchByRepoName(newRepoName).success(function(response){
                        $scope.repositories = response.items;
                        $scope.loading = false;
                    });

                },1000);
            }
        });

    }]);
