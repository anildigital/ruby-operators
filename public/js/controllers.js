var rubyOperatorsControllers = angular.module("rubyOperatorsControllers", []);

rubyOperatorsControllers.controller("RubyOperatorListCtrl", ['$scope', '$routeParams', '$location', '$http', 'Operators', function($scope, $routeParams, $location, $http, Operators) {

    $scope.operatorList = [];

    $scope.select = function(selectedOperator) {
        $location.path(selectedOperator.name.split(' ').join('-'));
        $scope.selectedOperator = selectedOperator;
    };

    $scope.navClass = function (operator) {
        return operator === $scope.selectedOperator ? 'active' : '';
    };   
}]);


rubyOperatorsControllers.controller("SingleRubyOperatorCtrl", ['$scope', '$routeParams', '$location', 'operatorList', function($scope, $routeParams, $location, operatorList) {

    $scope.$parent.operatorList = operatorList.data.operators;

    var selectedOperator = null;
    $scope.$parent.operatorList.forEach(function(operator) {
        if (operator.name.split(' ').join('-') === $routeParams.operatorName){
            selectedOperator = operator;
        }
    });
    if ((selectedOperator !== undefined) && (selectedOperator !== null )){
        $scope.selectedOperator = selectedOperator;
    }
    else {
        $scope.selectedOperator = $scope.$parent.operatorList[1];
    }
    
    $scope.$parent.select($scope.selectedOperator);


    $scope.showNextOperator = function() {
        if (screen.width < 760){
            var index = $scope.$parent.operatorList.indexOf($scope.$parent.selectedOperator);
            if (index === ($scope.$parent.operatorList.length - 1)) {
                $scope.selectedOperator = $scope.$parent.operatorList[0];
            }
            else {
                $scope.selectedOperator = $scope.$parent.operatorList[index+1];
            }
            $scope.$parent.select($scope.selectedOperator);
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
