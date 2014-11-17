'use strict';


angular.module('githubClient')
    .factory('RepositorySearch', function($http) {
        return {
            //finds all the repository that matches the given name.
            searchByRepoName : function(repoName) {
                var repoUrl = 'https://api.github.com/search/repositories?q=' + repoName;
                return $http.get(repoUrl);
            },

            //finds a single repository with its name.
            findRepository : function(repoName) {
                var repoUrl = 'https://api.github.com/search/repositories?q=repo:' + repoName;
                return $http.get(repoUrl);
            },

            //finds the issues of a given repository name.
            findIssues: function(repoName) {
                var issueUrl = 'https://api.github.com/search/issues?q=repo:' + repoName;
                return $http.get(issueUrl);
            },

            //finds the owern of the repository where owner's url is given.
            findOwner: function(url) {
                return $http.get(url);
            }
        };
    });