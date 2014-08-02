function App($scope, $http) {

    $scope.select = function(selectedOperator) {
        $scope.selectedOperator = selectedOperator;
    };

    $scope.operatorList = [];

    $http.get('config/operators.json').success(function(data) {
        $scope.operatorList = data.operators;
        $scope.selectedOperator = $scope.operatorList[1];
    });

    $scope.navClass = function (operator) {
        return operator === $scope.selectedOperator ? 'active' : '';
    };   

    $scope.selectedOperator = $scope.operatorList[4];

    $scope.showNextOperator = function() {
        if (screen.width < 760){
            var index = $scope.operatorList.indexOf($scope.selectedOperator);
            if (index === ($scope.operatorList.length - 1)) {
                $scope.selectedOperator = $scope.operatorList[0];
            }
            else {
                $scope.selectedOperator = $scope.operatorList[index+1];
            }
        }
    };

}
