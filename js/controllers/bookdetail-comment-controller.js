angular.module('book.bookdetailcomment', ['ngAnimate'])
 .controller('detailCommentController', function($scope) {
   console.log('bookDetail');
   $scope.isCollected = false;
   $scope.collectText = '收藏';
   $scope.toCollect = function() {
     $scope.isCollected = !$scope.isCollected;
     if ($scope.isCollected) {
       $scope.collectText = '已收藏';
     } else {
       $scope.collectText = '收藏';
     }
   }
   
 });