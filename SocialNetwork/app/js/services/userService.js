'use strict';

SocialNetwork.factory('userServices', function ($http, baseServiceUrl) {
    var userService = {};

    userService.params ={};

    var friendsUrl = baseServiceUrl+"/me/friends";

    userService.MyFriends = function (headers, success, error) {
        $http.get(friendsUrl, {headers: this.headers})
            .success(function (data, status, headers, config) {
                success(data)
                console.log(data)
            }).error(error);
    };



    return userService;
});