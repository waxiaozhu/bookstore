angular.module('book.store', ['ngAnimate'])
 .controller('storeController', function($scope, $ionicSlideBoxDelegate, $timeout, $state) {
   console.log('store');
  
   // 默认选择的tab项
   $scope.selectIndex = 0;
   $scope.navList = [
    {
      name: '思维'
    },{
      name: '管理'
    },{
      name: '文艺'
    },{
      name: '家庭'
    },{
      name: '儿童'
    },{
      name: '人文'
    }    
   ];
   
   // 切换
   $scope.change = function(index, e) {
     $scope.selectIndex = index;
     $ionicSlideBoxDelegate.$getByHandle('delegateStoreHandler').slide(index, 500);
     return false;
   }
   
   // 滑动
   $scope.slideHasChanged = function(index) {
     $scope.selectIndex = index;
     return false;
   }
   
   // 搜索
   $scope.goSearch = function() {
     $state.go('search');
   }
   
 });