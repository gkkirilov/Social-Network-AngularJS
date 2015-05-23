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

   $scope.addPost = function () {
        postData['username']=localStorage[username];
        userServices.AddPost($scope.postData,
            function (serverData) {
                notifyService.showInfo("Successfully added a new post!");
                $route.reload();
            },
            function (serverError) {
                notifyService.showError("Couldnt add new post", serverError)
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

});