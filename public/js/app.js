var RubyOperatorsApp = angular.module('RubyOperatorsApp', [
    'ngRoute',
    'rubyOperatorsControllers',
    'rubyOperatorsServices'
]);

RubyOperatorsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/:operatorName', {
            templateUrl: 'app.html',
            controller: 'SingleRubyOperatorCtrl',
            resolve: {
                operatorList: function(Operators) {
                    return Operators.get();
                }
            }
        }).otherwise({
            redirectTo: '/spaceship'
        });
}]);
