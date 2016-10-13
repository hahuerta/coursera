(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;
  var found = [];
  var searchTerm = "";

  narrowItDown.found = MenuSearchService.getMatchedMenuItems();
  narrowItDown.getMatchedMenuItems = function () {
    MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
    .then(function(result){
      narrowItDown.found = result;
    });
  }

  narrowItDown.removeItem = function functionName(itemIndex) {
    narrowItDown.found.splice(itemIndex, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })

    .then(function (result) {
      // process result and only keep items that match
      var items = result.data['menu_items'];
      var foundItems = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(items[i]);
        }
      }
      // return processed items
      return foundItems;
    });

    return response;
  };
}

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'narrowItDown',
    bindToController: true
  };
  return ddo;
}

function NarrowItDownDirectiveController() {
  var narrowItDown = this;
}

})();
