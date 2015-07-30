angular.module('starter.services', ['restangular'])

.factory('RestService', ['Restangular', function(Restangular) {
    var apiKey = 'pubkey-0nsb9635xii6xfog5fq077gmahjle1z9'
    var address = 'ckamide@gmail.com';
    var restAngular = Restangular.withConfig(function(Configurer) {
      Configurer.setBaseUrl('https://api.mailgun.net/v3/');
      Configurer.setDefaultRequestParams({ 
        apiKey: apiKey,
        address: address
      })
    });

    var oneUser = restAngular.one('address');
    oneUser.get().then(function(user) {
      // GET /address/validate
      console.log(user.getList('validate').$object);
    });

    return {
      setAdress: function(email) {
        return address = email;
      },
      getMessages: function() {
        return restAngular.getList();
      }
    };
}]);