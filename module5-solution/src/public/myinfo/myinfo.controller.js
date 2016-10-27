(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

// MyInfoController.$inject = ['myInfoCategories'];
MyInfoController.$inject = ['UserInfoService', 'MenuService'];
function MyInfoController(UserInfoService, MenuService) {
  var $ctrl = this;
  // $ctrl.myInfoCategories = myInfoCategories;
  $ctrl.user = UserInfoService.getUser();


  if($ctrl.user != null && $ctrl.user.dish != undefined){
    MenuService.getMenuItem($ctrl.user.dish).then(function(result){
      $ctrl.menuItem = result;
    });
  }

}


})();
