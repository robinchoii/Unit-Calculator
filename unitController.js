  var myAppModule = angular.module('myApp',[]);
  myAppModule.controller('unitController', function($scope) {
    $scope.pricesPerUnit = {
      level_1: 3.00,
      level_2: 2.50,
      level_3: 2.00,
      level_4: 1.50,
      level_5: "Contact Us for a Quote"
    };
    $scope.cumulativePrices = {
      baseprice: 300,
      baseprice_2: 900,
      baseprice_3: 1525,
      baseprice_4: 2525,
      baseprice_5: 8525,
    };
    $scope.units = 100;
    $scope.calculate = function(units) {
      if ($scope.units <= 50) {
        return $scope.cumulativePrices.baseprice
      } else if ($scope.units > 50 && $scope.units <= 250) {
        return $scope.cumulativePrices.baseprice + ($scope.units - 50) * $scope.pricesPerUnit.level_1
      } else if ($scope.units > 250 && $scope.units <= 500) {
        return $scope.cumulativePrices.baseprice_2 + ($scope.units - 250) * $scope.pricesPerUnit.level_2
      } else if ($scope.units > 500 && $scope.units <= 1000) {
        return $scope.cumulativePrices.baseprice_3 + ($scope.units - 500) * $scope.pricesPerUnit.level_3
      } else if ($scope.units > 1000 && $scope.units <= 5000) {
        return $scope.cumulativePrices.baseprice_4 + ($scope.units - 1000) * $scope.pricesPerUnit.level_4
      } else {
        return $scope.pricesPerUnit.level_5
      }
    }
  });
