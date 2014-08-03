var RubyOperatorsApp = angular.module('RubyOperatorsApp', [
    'ngRoute',
    'rubyOperatorsAppControllers',
    'rubyOperatorsAppServices'
]);

RubyOperatorsApp.config(['$routeProvider', '$locationProvider', '$anchorScrollProvider', function($routeProvider, $locationProvider, $anchorScrollProvider ) {
    $anchorScrollProvider.disableAutoScrolling(); 
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/:operatorName', {
            templateUrl: 'app.html',
            controller: 'SingleRubyOperatorCtrl'
        }).otherwise({
            redirectTo: '/spaceship'
        });
}]);
