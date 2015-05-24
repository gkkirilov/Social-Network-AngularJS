'use strict';

SocialNetwork.controller('PostController', function ($scope, $location, $route, $routeParams, authentication, notifyService, userServices, postServices) {


        var postData = {};


    $scope.showMyFeed = function () {
        postServices.ShowMyFeed(
            function (serverData) {
                $scope.feedData=serverData;
            },
            function (serverError) {
                notifyService.showError("Couldn't load feed", serverError)
            });
    };

    $scope.showUserWall = function () {
        var path = $routeParams.username;
        postServices.ShowUserWall(path,
            function (serverData) {
                $scope.feedData=serverData;
                console.log(serverData);
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Show Of Friends!", serverError)
            });
    };

    $scope.addPost = function () {
        var path = $routeParams.username;
        $scope.postData['Username'] = path;
        postServices.AddPost($scope.postData,
            function (serverData) {
                notifyService.showInfo("Successfully added a new post!");
                $route.reload();
            },
            function (serverError) {
                notifyService.showError("Couldnt add new post", serverError)
            });
    };
});