'use strict';

SocialNetwork.controller('UserController', function ($scope, $location, $route, $routeParams, authentication, notifyService, userServices) {

    var ClearData = function () {
        $scope.userCurrentData = "";
    };

    $scope.myFriends = function () {
        userServices.MyFriends(authentication.GetHeaders(),
            function (serverData) {
                $scope.friends=serverData;
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Show Of Friends!", serverError)
            });
    };

    $scope.myFriendsPreview = function () {
        userServices.MyFriendsPreview(authentication.GetHeaders(),
            function (serverData) {
                $scope.friendsPreview=serverData;
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Show Of Friends!", serverError)
            });
    };

    $scope.getUserFullData = function () {
        var path = $routeParams.username;
        if(path==localStorage['username']){
            $location.path('/feed');
        }
        userServices.GetUserFullData(path,authentication.GetHeaders(),
            function (serverData) {
                $scope.userCurrentData=serverData;
            },
            function (serverError) {
                notifyService.showError("Couldn't get user data.", serverError)
            });
    };

    $scope.getFriendRequests = function () {
        userServices.GetFriendRequests(authentication.GetHeaders(),
            function (serverData) {
                $scope.friendRequests=serverData;
            },
            function (serverError) {
                notifyService.showError("Couldn't get friend requests.", serverError)
            });
    };

    $scope.acceptFriendRequest = function (id) {
        userServices.AcceptFriendRequest(id,authentication.GetHeaders(),
            function (serverData) {
                console.log(serverData);
            },
            function (serverError) {
                notifyService.showError("Couldn't accept friend requests.", serverError)
            });
    };

    $scope.declineFriendRequest = function (id) {
        console.log("tuka ami ne");
        userServices.DeclineFriendRequest(id,authentication.GetHeaders(),
            function (serverData) {
                console.log("tuka 222222ne");
                success(serverData);
            },
            function (serverError) {
                notifyService.showError("Couldn't decline friend requests.", serverError)
            });
    };

    $scope.sendFriendRequest = function (username) {
        userServices.SendFriendRequest(username,authentication.GetHeaders(),
            function (serverData) {
                success(serverData);
            },
            function (serverError) {
                notifyService.showError("Couldn't send friend requests.", serverError)
            });
    };

});