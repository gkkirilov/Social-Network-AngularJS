'use strict';

SocialNetwork.factory('userServices', function ($http, baseServiceUrl) {
    var user = {};

    user.params ={};

    user.MyFriends = function (success, error) {
        $http.get(baseServiceUrl + '/me/friends', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    user.MyFriendsPreview = function (success, error) {
        $http.get(baseServiceUrl + '/me/friends/preview', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    user.AddPost = function (postData, success, error) {
        $http.post(baseServiceUrl + '/posts', postData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    user.GetUserFullData = function (success, error) {
        $http.get(baseServiceUrl + '/users/'+localStorage['username'], {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    user.GetFriendRequests = function (success, error) {
        $http.get(baseServiceUrl + '/me/requests', {headers: this.GetHeaders()})
            .success(function (data) {
                success(data)
            }).error(error);
    };


    user.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    return user;
});