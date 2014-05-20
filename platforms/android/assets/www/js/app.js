var MetasApp = angular.module('MetasApp', ['ngRoute']);

MetasApp.config(function($routeProvider){
	
	$routeProvider
	.when("/", {templateUrl: "partials/main.html", controller: "MainController"})
	.when("/create", {templateUrl: "partials/create.html", controller: "MainController"})	
	.otherwise({redirectTo: '/'});		
		
});

MetasApp.controller('MainController', function MainController($scope, $location) {
	//$scope.mostrar = false;
 	$scope.contador = 0;
 	$scope.data = new Date();
 	
 	$scope.incrementa = function() {
    	$scope.contador = $scope.contador + 1;
  	};
  	/*
  	$scope.mudar = function(){
  		$location.path("#create");
  	};
  		*/
});

/*
MetasApp.controller('SecondController', function SecondController($scope, $location) {
 	$scope.data = new Date();  		
});*/

