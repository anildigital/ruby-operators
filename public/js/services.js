var rubyOperatorsServices = angular.module('rubyOperatorsServices', ['ngResource']);

rubyOperatorsServices.factory('Operators', ['$http','$cacheFactory', function($http, $cacheFactory){
    return {
        get: function(){
            return $http.get('config/operators.json', {cache: true});
        }
    };
}]);
