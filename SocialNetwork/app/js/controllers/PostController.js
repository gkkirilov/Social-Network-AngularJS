'use strict';

SocialNetwork.controller('PostController', function ($scope, $location, $route, authentication, notifyService, userServices, postServices) {

    var ClearData = function () {

    };

    $scope.showPosts = function () {
        postServices.ShowPosts(
            function (serverData) {
                $scope.feedData=serverData;
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Show Of Friends!", serverError)
            });
    };
});