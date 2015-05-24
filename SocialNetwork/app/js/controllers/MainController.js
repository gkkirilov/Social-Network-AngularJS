'use strict';

SocialNetwork.controller('MainController', function ($scope, $location, authentication, notifyService) {


    if (!authentication.isLoggedIn()){
        $location.path('/');
    }

    $scope.username = authentication.GetUsername();

});
