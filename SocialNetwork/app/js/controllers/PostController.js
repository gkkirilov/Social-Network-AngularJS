'use strict';

SocialNetwork.controller('PostController', function ($scope, $location, $route, $routeParams, authentication, notifyService, userServices, postServices) {

    var postData = {};

    $scope.showMyFeed = function () {
        postServices.ShowMyFeed(authentication.GetHeaders(),
            function (serverData) {
                $scope.feedData=serverData;
            },
            function (serverError) {
                notifyService.showError("Couldn't load feed", serverError)
            });
    };

    $scope.showUserWall = function () {
        var path = $routeParams.username;
        postServices.ShowUserWall(path,authentication.GetHeaders(),
            function (serverData) {
                $scope.feedData=serverData;
            },
            function (serverError) {
                notifyService.showError("Cant show user wall!", serverError)
            });
    };

    $scope.addPost = function () {
        var path = $routeParams.username;
        $scope.postData['Username'] = path;
        postServices.AddPost($scope.postData,authentication.GetHeaders(),
            function (serverData) {
                notifyService.showInfo("Successfully added a new post!");
                $route.reload();
            },
            function (serverError) {
                notifyService.showError("Couldn't add new post", serverError)
            });
    };

    $scope.likePost = function (id) {
        postServices.LikePost(id,authentication.GetHeaders(),
            function (serverData) {
                notifyService.showInfo("Successfully liked the post!");
            },
            function (serverError) {
                notifyService.showError("Couldn't like the post", serverError)
            });
    };

    $scope.deletePost = function (id) {
        postServices.DeletePost(id,authentication.GetHeaders(),
            function (serverData) {
                notifyService.showInfo("Successfully deleted the post!");
                $route.reload();
            },
            function (serverError) {
                notifyService.showError("Couldn't delete the post", serverError)
            });
    };


    $scope.getUserFriendsPreview = function () {
            var path = $routeParams.username;
            console.log(path);

            postServices.GetUserFriendsPreview(path,authentication.GetHeaders(),
                function (serverData) {
                    console.log(serverData);
                    $scope.UserFriendsPreview=serverData;
                },
                function (serverError) {
                    notifyService.showError("Couldn't get the data", serverError)
                });
        };
});