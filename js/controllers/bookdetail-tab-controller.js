angular.module('book.bookdetail', ['ngAnimate'])
 .controller('bookDetailController', function($scope) {
   console.log('bookTabDetail');
   $scope.buyBook = function() {
    console.log('buyBook')
    return false;
   }

   $scope.readBook = function() {
    console.log('readBook');
    return false;
   }
   
 });