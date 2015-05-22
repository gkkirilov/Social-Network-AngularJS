'use strict';

SocialNetwork.factory('authentication', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl + '/users';

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + '/register', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Logout = function ( success, error) {
        $http.post(serviceUrl + '/logout', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.GetUserProfile = function (success, error) {
        $http.get(baseServiceUrl + '/me', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.EditUserProfile = function (editUserData, success, error) {
        $http.put(baseServiceUrl + '/me', editUserData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.ChangePassword = function (passwordData, success, error) {
        $http.put(baseServiceUrl + '/me/ChangePassword', passwordData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success()
            }).error(error);
    };

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.userName;
    };

    service.GetUsername = function () {
        return localStorage['username'];
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };

    service.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    service.isLoggedIn = function () {
        return localStorage['accessToken'];
    };

    return service;
});