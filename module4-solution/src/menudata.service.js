(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
;

MenuDataService.$inject = ['$q', '$http', 'ApiBasePath'];
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;
  service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
      return response;
  };
/*
  service.getAllCategories = function () {
    var deferred = $q.defer();

    var result = {
      message: ""
    };
    console.log("getAllCategories");
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })

    .then(function (result) {
      // process result and only keep items that match
      var items = result.data;
      console.log(result.data);

      deferred.resolve(items);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      result.message = "Stay away from cookies, Yaakov!";
      deferred.reject(result);
    });

    return deferred.promise;
  };*/

  service.getItemsForCategory = function (categoryShortName) {
    //var deferred = $q.defer();
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
/*
    var result = {
      message: ""
    };
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    })

    .then(function (result) {
      // process result and only keep items that match
      var items = result.data['menu_items'];
      var foundItems = [];

      foundItems = items;
      // return processed items
      //return foundItems;
      deferred.resolve(foundItems);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      result.message = "Stay away from cookies, Yaakov!";
      deferred.reject(result);
    });

    return deferred.promise;*/
  };

}


})();
