angular.module('starter.services', ['restangular'])

.factory('RestService', ['Restangular', function(Restangular) {
    var apiKey = 'api_key=pubkey-0nsb9635xii6xfog5fq077gmahjle1z9'
    var address = 'ckamide@gmail.com';
    var restAngular = Restangular.withConfig(function(Configurer) {
      Configurer.setBaseUrl('https://api.mailgun.net/v3/address/validate');
      Configurer.setDefaultRequestParams({ 
        apiKey: apiKey,
        address: address
      })
    });
    restAngular.setResponseExtractor(function(response, operation) {
        console.log(response.data);
    });
    var messageService = restAngular.all('messages');

    return {
      setAdress: function(email) {
        return address = email;
      },
      getMessages: function() {
        return restAngular.getList();
      }
    };
}]);