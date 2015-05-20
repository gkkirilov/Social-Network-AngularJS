'use strict';

SocialNetwork.controller('registerController', function ($scope, authentication) {
    $scope.register = function (user, registerForm) {
            authentication.Register(user, function (data) {
                console.log(data);
            });
    }


});

SocialNetwork.controller('loginController', function ($scope, authentication) {
    $scope.login = function (user, registerForm) {
        authentication.Login(user, function (data) {
            console.log(data);
        });
    }
});

