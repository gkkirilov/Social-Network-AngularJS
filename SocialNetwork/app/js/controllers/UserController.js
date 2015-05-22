'use strict';

SocialNetwork.controller('UserController', function ($scope, $location, $route, authentication, notifyService, userServices) {

    $scope.mineFriends = {};

    $scope.myFriends = function () {
        userServices.MyFriends(function (serverData) {

                console.log($scope.mineFriends);
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Register!", serverError)
            });
    };

        /*$scope.login = function () {
        authentication.Login($scope.loginData,
            function (serverData) {
                notifyService.showInfo("Successful Login!");
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('/feed');
            }, function (serverError) {
                notifyService.showError("Unsuccessful Login!", serverError)
            });
        };*/
});