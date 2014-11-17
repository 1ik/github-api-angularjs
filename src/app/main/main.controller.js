'use strict';

angular.module('githubClient')
    .controller('MainCtrl', [ '$scope', '$timeout', function ($scope,$timeout) {
        $scope.appTitle = 'Simple github client';

        var delay;

        $scope.$watch('repository_name', function(newRepoName) {
            if(newRepoName) {
                if(delay) {
                    $timeout.cancel(delay);
                }
                delay = $timeout(function(){
                    //console.log(newRepoName);
                },1000);
            }
        });

    }]);
