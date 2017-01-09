var myAppModule = angular.module('calculator',[]);
  myAppModule.controller('calcController', function($scope) {
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
    };
    $scope.unitStyle = {
      'font-family': 'adobe-garamond-pro',
      'color': 'rgba(26,26,26,0.7)',
      'box-shadow': '0 0 5px rgba(0,0,0,.3)',
      'padding-top': '17px',
      'padding-bottom': '17px',
      'margin-bottom': '60px'
    };
    $scope.unitHeadingStyle = {
      'font-size': '20px',
      'font-weight': '600',
      'line-height': '24px'
    };
    $scope.unitDescriptionStyle = {
      'color': 'gray',
    };
    $scope.unitPricing = {
      'font-family': 'adobe-garamond-pro',
      'color': 'rgba(26,26,26,0.7)',
      'font-size': '18px',
      'line-height': '18px'
    };
    $scope.unitPricingDescription = {
      'font-family': 'adobe-garamond-pro',
      'color': 'rgba(26,26,26,0.7)',
      'font-size': '18px',
      'line-height': '24px'
    };
  });
