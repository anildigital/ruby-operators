var RubyOperatorsApp = angular.module('RubyOperatorsApp', [
    'ngRoute',
    'rubyOperatorsAppControllers',
    'rubyOperatorsAppServices'
]);

RubyOperatorsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/:operatorName', {
            templateUrl: 'app.html',
            controller: 'SingleRubyOperatorCtrl'
        }).otherwise({
            redirectTo: '/spaceship'
        });
}]);
