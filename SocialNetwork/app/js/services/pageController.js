'use strict';

SocialNetwork.controller('PageCtrl', function ($scope, $location, $route, $routeParams, authentication, notifyService, userServices) {

// pagination controls
    $scope.currentPage = 1;
    $scope.totalItems = $scope.items.length;
    $scope.entryLimit = 8; // items per page
    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

    // $watch search to update pagination
    $scope.$watch(function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.items, newVal);
        $scope.totalItems = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        $scope.currentPage = 1;
    }, true);

});