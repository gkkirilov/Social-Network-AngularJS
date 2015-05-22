'use strict';

SocialNetwork.controller('MainController', function ($scope, $location, authentication, notifyService) {

    //var path = $location.path();/*(path.indexOf("user") != -1) &&*/
    if (!authentication.isLoggedIn()){
        $location.path('/');
    }

    $scope.username = authentication.GetUsername();

});
