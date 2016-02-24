'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider',function($routeProvide) {
	$routeProvide
		.when('/'.{
			templateUrl:'html/home.html',
			controller:'PhoneListCtrl'
		})
		.when('/about'.{
			templateUrl:'html/about.html',
			controller:'AboutCtrl'
		})
		.when('/contact'.{
			templateUrl:'html/contact.html',
			controller:'ContactCtrl'
		})
		.when('/other'.{
			templateUrl:'html/other.html',
			controller:'OtherCtrl'
		})
		.otherwise({
			redirectTo:'/'
		})

	
}])

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', function($scope,$http,$location) {$scope.title = 'Телефоны';

    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        $scope.phones = data;
    });

}]);

//About controller
phonecatApp.controller('AboutCtrl', ['$scope','$http','$location' function($scope,$http,$location){
	
}])

//Contact controller
phonecatApp.controller('ContactCtrl', ['$scope','$http','$location' function($scope,$http,$location){
}])

//Other controller
phonecatApp.controller('OtherCtrl', ['$scope','$http','$location' function($scope,$http,$location){
}])
//phone details controller
phonecatApp.controller('PhoneDetailCtrl', ['$scope','$http','$location' function($scope,$http,$location){
}])
