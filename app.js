(function () {
 'use strict';

angular.module('myFirstApp',[])
.controller('myFirstController', function($scope){
  $scope.name = "Fahad";
  $scope.sayHello = function(){
    return "Hello Fucntion";
  };
});
})();
