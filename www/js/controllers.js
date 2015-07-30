angular.module('starter.controllers', [])

.controller('BuscaCtrl', function($scope, RestService) {
	$scope.busca = {
		email: 'teste'
	}
	$scope.buscar = function(){
		RestService.setAdress($scope.busca.email);
		console.log(RestService.getMessages());
	}
})

.controller('ConsultasCtrl', function($scope, RestService) {
	$scope.data = {
		showDelete: false
	};

	$scope.onItemDelete = function(item) {
    	$scope.items.splice($scope.items.indexOf(item), 1);
  	};
});
