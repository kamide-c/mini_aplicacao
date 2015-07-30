angular.module('starter.controllers', [])

.controller('BuscaCtrl', function($scope, $rootScope, RestService) {
	$rootScope.items = [];
	$scope.numLimit = 5;

	$scope.busca = {
		email: ''
	};
	$scope.buscar = function(){
		$rootScope.items.push(RestService.show($scope.busca.email));
		console.log($rootScope.items)
	};

	$scope.data = {
		showDelete: false
	};

	$scope.onItemDelete = function(item) {
    	$rootScope.items.splice($rootScope.items.indexOf(item), 1);
  	};
})

.controller('ConsultasCtrl', function($scope, $rootScope, RestService) {
	$scope.data = {
		showDelete: false
	};

	$scope.onItemDelete = function(item) {
    	$rootScope.items.splice($rootScope.items.indexOf(item), 1);
  	};
  	$scope.clearAll = function() {
    	$rootScope.items = [];
  	};
});
