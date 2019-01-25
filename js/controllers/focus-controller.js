angular.module('book.focus',['ngAnimate'])
.controller('focusController', function($scope) {
  console.log('focus');
  
  // 关注
  $scope.isFocus = false;
  $scope.FocusText = '关注';
  
  $scope.clickFocus = function() {
    $scope.isFocus = !$scope.isFocus;
    if ($scope.isFocus) {
      $scope.FocusText = '已关注';
    } else {
      $scope.FocusText = '已互关';
    }
  }
});
