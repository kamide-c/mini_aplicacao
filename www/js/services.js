angular.module('starter.services', [])

.factory('RestService', function(Restangular) {
  return {
    show: function(key) {
      return Restangular.one("address", "validate").get({ address: key});
    }
  };
});