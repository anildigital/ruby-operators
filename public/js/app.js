function App($scope) {

    $scope.select = function(selectedOperator) {
        $scope.selectedOperator = selectedOperator;
    };

    $scope.operatorList = [
        {name: "hashrocket",
         symbol: "=>"},
        {name: "spaceship",
         symbol: "<=>"},
        {name: "threequals",
         symbol: "==="},
        {name: "twiddlewalka",
         symbol: "~>"},
        {name: "stabby lambda",
         symbol: "->"},
        {name: "spiral",
         symbol: "@"},
        {name: "splat",
         symbol: "*"},
        {name: "tilde",
         symbol: "~"},
        {name: "octothorpe",
         symbol: "#"},
        {name: "skull tag",
         symbol: "<%="},
        {name: "bang",
         symbol: "!"},
        {name: "crab claws",
         symbol: "#{}"},
        {name: "curly",
         symbol: "{}  "},
        {name: "paren",
         symbol: "()"},
        {name: "bracket",
         symbol: "[]"},
        {name: "elvis",
         symbol: "?:"},
        {name: "shovel",
         symbol: "<<"},
        {name: "constellation",
         symbol: "**"},
        {name: "equalike",
         symbol: "=~"},
        {name: "hat",
         symbol: "^"},
        {name: "pretzel",
         symbol: "&"},
        {name: "whack",
         symbol: "/"},
        {name: "blank",
         symbol: "_"}     
    ];

    $scope.navClass = function (operator) {
        return operator === $scope.selectedOperator ? 'active' : '';
    };   


    $scope.selectedOperator = $scope.operatorList[4];

}
