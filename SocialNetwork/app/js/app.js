'use strict';

var SocialNetwork = angular.module("SocialNetwork", ['ngRoute','base64']);

SocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SocialNetwork.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/guestPage.html',
            controller: ''
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: ''
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: ''
        })
        .when('/feed', {
            templateUrl: 'templates/feedPage.html',
            controller: 'MainController'
        })
        .when('/profile',{
            templateUrl: 'templates/profile.html',
            controller: 'MainController'
        })
        .when('/profile/password',{
            templateUrl: 'templates/changePassword.html',
            controller: 'MainController'
        })
        .when('/friends',{
            templateUrl: 'templates/friends.html',
            controller: 'MainController'
        })
        .when('/logout',{
            templateUrl: 'templates/logout.html',
            controller: 'MainController'
        })
        .when('/users/:username',{
            templateUrl: 'templates/userWall.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo: '/'})
});


