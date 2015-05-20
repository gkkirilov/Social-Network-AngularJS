'use strict';

var SocialNetwork = angular.module("SocialNetwork", ['ngRoute']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'templates/guestPage.html',
            controller: ''
        })
        .when('/login', {
            templateUrl:'templates/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl:'templates/register.html',
            controller: 'registerController'
        })
        .otherwise({redirectTo: '/'})
});


