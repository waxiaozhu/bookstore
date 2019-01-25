angular.module('book.singlepage',['ngAnimate'])
.controller('singlepageController', function($scope) {
  console.log('singlepage');
  
  // 是否私信
  $scope.issxin = false;
  
  // 是否关注
  $scope.issguan = true;
  
  
});
