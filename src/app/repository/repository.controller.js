'use restrict';

angular.module('githubClient')
    .controller('RepositoryCtrl', [ '$scope', 'RepositorySearch', '$routeParams', function ($scope, RepositorySearch, $routeParams) {

        var repository_name = $routeParams.author + '/' + $routeParams.repo_name;

        RepositorySearch.findRepository(repository_name).success(function(response){

            $scope.repository = response.items[0];

            RepositorySearch.findOwner($scope.repository.owner.url).success(function(response){
                $scope.owner = response;
                if($scope.owner.bio == null) {
                    $scope.owner.bio = "No bio";
                }
                if($scope.owner.location == null)
                    $scope.owner.location = "Not found";
            });

            RepositorySearch.findIssues(repository_name).success(function(response){
                $scope.issues = response;
                $scope.pagination_items = [];

                var pages = $scope.issues.items.length/5; //5 items per page;

                for(var i =1; i <= pages; i++) {
                    $scope.pagination_items.push({
                        active:false,
                        index:i
                    });
                }

                if(pages < 1) {
                    $scope.pagination_items[0] = {
                        active:true,
                        index:1
                    }
                }

                $scope.pagination_items[0].active = true; //make the first item selected;
                $scope.current_pag_item = $scope.pagination_items[0];
            });



            $scope.toggleShow = function(issue) {
                var issue_body = $('#' + issue.id);
                issue_body.toggleClass('hidden');
                var link = issue_body.next().find('a');
                if(link.html() == 'hide') {
                    link.html('show');
                } else {
                    link.html('hide');
                }
            }


            $scope.set_pag_item = function(item) {
                $scope.current_pag_item.active = false;
                $scope.current_pag_item = item;
                $scope.current_pag_item.active = true;
            }


        });

    }]);
