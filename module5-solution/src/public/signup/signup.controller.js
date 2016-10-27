(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService', 'MenuService'];
function SignUpController(UserInfoService, MenuService) {
  var reg = this;

  reg.completed = false;

  reg.submit = function () {
    UserInfoService.setUser(reg.user);
    UserInfoService.markCompleted(reg.user);
  };

  reg.user = UserInfoService.getUser();
  reg.user.dish = 'A1'; // TODO load a list from http
  /*reg.getMatchedMenuItems = function () {
    UserInfoService.getMatchedMenuItems()
    .then(function(result){
      reg.items = result;
    });
  }*/

  reg.validateDish = function() {
    var dish = reg.user.dish;
    if (dish != null) {
      MenuService.getMenuItem(dish).then(function(result) {
       reg.completed = true;
     }).catch(function(error) {
       reg.completed = false;
     });
    } else {
     reg.completed = false;
    }
  }

}

})();
