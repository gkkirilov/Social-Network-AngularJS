'use strict';

SocialNetwork.controller('UserController', function ($scope, $location, $route, authentication, notifyService, userServices) {

    var ClearData = function () {
        $scope.userCurrentData = "";
    };

    $scope.myFriends = function () {
        userServices.MyFriends(
            function (serverData) {
                $scope.friends=serverData;
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Show Of Friends!", serverError)
            });
    };

    $scope.myFriendsPreview = function () {
        var path = $routeParams.username;
        userServices.MyFriendsPreview(path,
            function (serverData) {
                $scope.friendsPreview=serverData;
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Show Of Friends!", serverError)
            });
    };

    $scope.getUserFullData = function () {
        userServices.GetUserFullData(
            function (serverData) {
                $scope.userCurrentData=serverData;
            },
            function (serverError) {
                notifyService.showError("Couldn't get user data.", serverError)
            });
    };

    $scope.getFriendRequests = function () {
        userServices.GetFriendRequests(
            function (serverData) {
                $scope.friendRequests=serverData;
            },
            function (serverError) {
                notifyService.showError("Couldn't get friend requests.", serverError)
            });
    };

});