(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.hasItems = ShoppingListCheckOffService.hasBoughtItems();
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [
    { name: "cookies", quantity: 1 },
    { name: "cookies", quantity: 2 },
    { name: "cookies", quantity: 3 },
    { name: "cookies", quantity: 4 },
    { name: "chocolate cookies", quantity: 10 }
  ];
  var bought = [];
  var hasBoughtItems = true;
  // Move from toBuy array to bought array
  service.buyItem = function (itemIndex) {
    var item = toBuy[itemIndex];
    toBuy.splice(itemIndex, 1);
    bought.push(item);
  };

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };
  service.hasBoughtItems = function () {
    console.log(bought.length);
    if(bought.length <= 0){
      hasBoughtItems = false
    }else{
        hasBoughtItems = true;
    }
    return hasBoughtItems;
  };

}

})();
