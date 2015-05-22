'use strict';

var SocialNetwork = angular.module("SocialNetwork", ['ngRoute']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/guestPage.html',
            controller: ''
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'AuthenticationController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'AuthenticationController'
        })
        .when('/feed', {
            templateUrl: 'templates/feedPage.html',
            controller: ''
        })
        .when('/profile',{
            templateUrl: 'templates/profile.html',
            controller: 'AuthenticationController'
        })
        .when('/profile/password',{
            templateUrl: 'templates/changePassword.html',
            controller: 'AuthenticationController'
        })
        .otherwise({redirectTo: '/'})

        //$locationProvider.html5Mode(true);
});


