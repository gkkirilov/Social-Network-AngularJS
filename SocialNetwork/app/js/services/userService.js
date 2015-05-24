'use strict';

SocialNetwork.factory('userServices', function ($http, baseServiceUrl) {
    var user = {};

    user.params ={};

    user.MyFriends = function (headers, success, error) {
        $http.get(baseServiceUrl + '/me/friends', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    user.MyFriendsPreview = function (headers, success, error) {
        $http.get(baseServiceUrl + '/me/friends/preview', {headers:headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };


    user.GetUserFullData = function (path, headers, success, error) {
        $http.get(baseServiceUrl + '/users/' + path, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    user.GetFriendRequests = function (headers, success, error) {
        $http.get(baseServiceUrl + '/me/requests', {headers: headers})
            .success(function (data, headers) {
                success(data)
            }).error(error);
    };

    user.AcceptFriendRequest = function (id, headers, success, error) {
        $http.put(baseServiceUrl + '/me/requests/'+ id + '?status=approved', {headers: headers})
            .success(function (data, headers) {
                success(data)
            }).error(error);
    };

    user.DeclineFriendRequest = function (id, headers, success, error) {
        $http.put(baseServiceUrl + '/me/requests/'+ id + '?status=rejected', {headers: headers})
            .success(function (data, headers) {
                console.log("tuka ne me kefi");
                success(data)
            }).error(error);
    };

    user.SendFriendRequest = function (username, headers, success, error) {
        $http.post(baseServiceUrl + '/me/requests/'+ username, {headers: headers})
            .success(function (data) {
                success(data)
            }).error(error);
    };

    return user;
});