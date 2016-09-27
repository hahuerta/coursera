(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.foodList = "";
  $scope.outputMessage = "";

  $scope.checkFood = function(){

    var foodList = $scope.foodList.split(',');
    if($scope.foodList == ""){
      $scope.outputMessage = "Please enter data first";
    }else if(foodList.length > 0 && foodList.length <= 3){
      $scope.outputMessage = "Enjoy!";
    }else{
      $scope.outputMessage = "Too much!";
    }
  }

}

})();
