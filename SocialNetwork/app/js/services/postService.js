'use strict';

SocialNetwork.factory('postServices', function ($http, baseServiceUrl) {
    var post = {};


    post.ShowMyFeed = function (success, error) {
        $http.get(baseServiceUrl + '/me/feed?StartPostId&PageSize=5', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    post.ShowUserWall = function (path, success, error) {
        $http.get(baseServiceUrl + '/users/'+ path +'/wall?StartPostId&PageSize=5', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    post.AddPost = function (postData, success, error) {
        $http.post(baseServiceUrl + '/Posts', postData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };


    post.LikePost = function (id, success, error) {
        $http.post(baseServiceUrl + '/Posts/' + id + '/likes', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };



    post.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    return post;
});