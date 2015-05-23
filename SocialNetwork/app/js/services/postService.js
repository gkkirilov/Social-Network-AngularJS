'use strict';

SocialNetwork.factory('postServices', function ($http, baseServiceUrl) {
    var post = {};


    post.ShowPosts = function (success, error) {
        $http.get(baseServiceUrl + '/me/feed?StartPostId&PageSize=5', {headers: this.GetHeaders()})
            //TODO: Make pagination and put varibles into url
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