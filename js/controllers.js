'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope,
$http) {     $scope.title = 'Телефоны';

    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        $scope.phones = data;
    });

}]);
