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

    //TODO: change that it gets current logged user data instead of other users data
    user.GetUserFullData = function (path,success, error) {
        $http.get(baseServiceUrl + '/users/' + path, {headers: this.GetHeaders()})
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