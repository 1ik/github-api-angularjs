'use strict';

angular.module('githubClient')
  .controller('NavbarCtrl', function ($scope) {



        $scope.pages = [
            {
                name : 'Home',
                url : '/'
            },
            {
                name : 'Search Repository',
                url : '/#/search/'
            },
            {
                name : 'About',
                url : '/#/about/'
            },
            {
                name : 'Contact',
                url : '/#/contact/'
            }
        ];

  });
