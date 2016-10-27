(function () {
'use strict';

angular.module('public')
.service('UserInfoService', UserInfoService)
// .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
;

UserInfoService.$inject = ['$q', '$http', 'ApiPath'];
function UserInfoService($q, $http, ApiPath) {
  var service = this;

  var user = {
    // firstname : 'test',
    // lastname : 'test2'
  };

  service.setUser = function (newUser) {
    user = newUser;
  }

  service.getUser = function () {
    return user;
  }

  service.markCompleted = function () {
      user.completed = true;
  }




  /*
  service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiPath + "/categories.json")
      });
      return response;
  };*/
/*
  service.getAllCategories = function () {
    var deferred = $q.defer();

    var result = {
      message: ""
    };
    console.log("getAllCategories");
    return $http({
      method: "GET",
      url: (ApiPath + "/categories.json")
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
/*
  service.getItemsForCategory = function (categoryShortName) {
    //var deferred = $q.defer();
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;*/
/*
    var result = {
      message: ""
    };
    return $http({
      method: "GET",
      url: (ApiPath + "/menu_items.json"),
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

    return deferred.promise;
  };*/

}


})();
