'use strict';

SocialNetwork.factory('postServices', function ($http, baseServiceUrl) {
    var posts = {};


    posts.ShowMyFeed = function (headers, success, error) {
        $http.get(baseServiceUrl + '/me/feed?StartPostId&PageSize=5', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.ShowUserWall = function (path, headers, success, error) {
        $http.get(baseServiceUrl + '/users/'+ path +'/wall?StartPostId&PageSize=5', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.AddPost = function (postData, headers, success, error) {
        $http.post(baseServiceUrl + '/Posts', postData, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.LikePost = function (id, headers, success, error) {
        $http.post(baseServiceUrl + '/posts/' + id + '/likes', {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    posts.DeletePost = function (id, success, error) {
        $http.delete(baseServiceUrl + '/Posts/' + id, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    return posts;
});