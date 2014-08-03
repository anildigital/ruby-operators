
var rubyOperatorsAppServices = angular.module('rubyOperatorsAppServices', ['ngResource']);

rubyOperatorsAppServices.factory('Operators', ['$http','$cacheFactory', function($http, $cacheFactory){
    return {
        get: function(){
            return $http.get('config/operators.json', {cache: true});
        }
    };
}]);
