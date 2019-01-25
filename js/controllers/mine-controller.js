angular.module('book.mine', ['ngAnimate'])
 .controller('mineController', function($state, $scope, $ionicModal) {
   console.log('mine');
   // 我的关注
   $scope.goToFocus = function() {
     $state.go('focus');
   }
   // 我的收藏
   
   // 簽到
   $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'myModalAnimation'
   }).then(function(modal) {
        $scope.modal = modal;
   });
   $scope.signhere = function() {
      $scope.modal.show();
   }
   $scope.shutdownModal = function() {
     $scope.modal.hide();
   }
    //当我们用到模型时，清除它！
   $scope.$on('$destroy', function() {
      $scope.modal.remove();
   });
    // 当隐藏的模型时执行动作
   $scope.$on('modal.hide', function() {
      // 执行动作
   });
    // 当移动模型时执行动作
   $scope.$on('modal.removed', function() {
      // 执行动作
   });
   
   
 });