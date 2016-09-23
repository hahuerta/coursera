(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.outputMessage = "";

  $scope.checkFood = function(){
    var foodList = ($scope.foodList+"").split(',');

    for (var i = 0; i < foodList.length; i++) {
      foodList[i];
    }

    if(foodList.length <= 3){
      $scope.outputMessage = "Enjoy!";

    }else{
      $scope.outputMessage = "Too much!";
    }
  }

}

})();

 
