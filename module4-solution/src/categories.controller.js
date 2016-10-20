(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var categoriesC = this;

  console.log(categories);
  categoriesC.categories = categories;

}

})();
