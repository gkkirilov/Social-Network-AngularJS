'use strict';

SocialNetwork.factory('postServices', function ($http, baseServiceUrl) {
    var posts = {};


    posts.ShowMyFeed = function (success, error) {
        $http.get(baseServiceUrl + '/me/feed?StartPostId&PageSize=5', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.ShowUserWall = function (path, success, error) {
        $http.get(baseServiceUrl + '/users/'+ path +'/wall?StartPostId&PageSize=5', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.AddPost = function (postData, success, error) {
        $http.post(baseServiceUrl + '/Posts', postData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };


    posts.LikePost = function (id, success, error) {
        $http.post(baseServiceUrl + '/Posts/' + id + '/likes', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.DeletePost = function (id, success, error) {
        $http.delete(baseServiceUrl + '/Posts/' + id, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };



    posts.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    return posts;
});