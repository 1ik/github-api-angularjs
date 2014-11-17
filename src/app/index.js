'use strict';

angular.module('githubClient', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
    .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
    })
    .when('/repository/:author/:repo_name', {
        templateUrl: 'app/repository/repository.html',
        controller: 'RepositoryCtrl'
    })
    .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'NavbarCtrl'
    })
    .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'NavbarCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });


