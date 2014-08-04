var rubyOperatorsAppControllers = angular.module("rubyOperatorsAppControllers", []);

rubyOperatorsAppControllers.controller("RubyOperatorListCtrl", ['$scope', '$routeParams', '$location', '$http', 'Operators', function($scope, $routeParams, $location, $http, Operators) {

    $scope.operatorList = [];

    $scope.select = function(selectedOperator) {
        $location.path(selectedOperator.name.split(' ').join('-'));
    };

    Operators.get().success(function(data){
        $scope.operatorList = data.operators;
    });

    $scope.navClass = function (operator) {
        return operator === $scope.selectedOperator ? 'active' : '';
    };   
}]);


rubyOperatorsAppControllers.controller("SingleRubyOperatorCtrl", ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {

    $scope.selectedOperator = $scope.$parent.selectedOperator;

    var selectedOperator = null;
    $scope.$parent.operatorList.forEach(function(operator) {

        if (operator.name.split(' ').join('-') === $routeParams.operatorName){
            selectedOperator = operator;
        }
    });
    if ((selectedOperator !== undefined) && (selectedOperator !== null )){
        $scope.selectedOperator = selectedOperator;
        $scope.$parent.selectedOperator = $scope.selectedOperator;
    }
    else {
        $scope.selectedOperator = $scope.$parent.operatorList[1];
        $scope.$parent.selectedOperator = $scope.selectedOperator;
    }
    
    $scope.showNextOperator = function() {
        if (screen.width < 760){
            var index = $scope.$parent.operatorList.indexOf($scope.$parent.selectedOperator);
            if (index === ($scope.$parent.operatorList.length - 1)) {
                $scope.selectedOperator = $scope.$parent.operatorList[0];
                $scope.$parent.selectedOperator =  $scope.selectedOperator;
            }
            else {
                $scope.selectedOperator = $scope.$parent.operatorList[index+1];
                $scope.$parent.selectedOperator =  $scope.selectedOperator;
            }
            $scope.$parent.select($scope.$parent.selectedOperator);
        }
    };

    $scope.$watch(function() {
        return document.getElementById("code_example");
    },function() {
        var element = document.getElementById("code_example");
        if(element){
            hljs.highlightBlock(element);
        }
    });

}]);
