angular.module('book.dynamic', ['ngAnimate'])
  .controller('dynamicController', function($scope, $ionicModal, $ionicSlideBoxDelegate, $state, $ionicPopover, $rootScope, $ionicPopup) {
    $scope.navList = [
      {
          name: '热书评'
      },
      {
          name: '书友圈'
      }
  ];
  
  // .fromTemplateUrl() 方法
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
    animation:"popAnimation"
  }).then(function(popover) {
    $scope.popover = popover;
  });
  // 清除浮动框
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // 在隐藏浮动框后执行
  $scope.$on('popover.hidden', function() {
    // 执行代码
  });
  // 移除浮动框后执行
  $scope.$on('popover.removed', function() {
    // 执行代码
  });
  
  $ionicModal.fromTemplateUrl('my-comment.html', {
    scope: $scope,
    animation: 'commentShow',
    focusFirstInput: true,
    backdropClickToClose: true, // 点击背景关闭
    hardwareBackButtonClose: true // 手机物理键是否关闭
  }).then(function(commentmodal) {
    $scope.commentmodal = commentmodal;
  });
  //Cleanup the commentmodal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.commentmodal.remove();
  });
  // Execute action on hide commentmodal
  $scope.$on('commentmodal.hidden', function() {
    // Execute action
  });
  // Execute action on remove commentmodal
  $scope.$on('commentmodal.removed', function() {
    // Execute action
  });
  // 默认是热书评
  $scope.defaultPageIndex = 0;

  $scope.navSelect = function(index) {
    $scope.defaultPageIndex = index;
    $ionicSlideBoxDelegate.$getByHandle('delegateHandler').slide(index, 500);
  }
  
  // 滑动监控
  $scope.slideHasChanged = function(index) {
    $scope.defaultPageIndex = index;
  }
  
  // 点赞
  $scope.toPraise = function() {
    $scope.isPraised = !$scope.isPraised;
  }
  
  // 刷新
  $scope.doRefresh = function() {
    console.log('doFresh');
  }
  
  // 加载
  $scope.loadMore = function() {
    console.log('loadmore');
  }
  
  // 去个人主页
  $scope.goSinglePage = function() {
    $state.go('singlepage');
  }
  
  // 去复制或者举报
  $scope.toCopy = function($event) {
    $scope.popover.show($event);
  }
  
  // 去评论
  $scope.toComment = function($event) {
    console.log('toComment');
    $scope.commentmodal.show();
  }
  
  function showDialog(op,title) {
    $ionicPopup.confirm({
        title: title,
        cssClass: 'operatorB'
    }).then(function(res) {
      if(res) {
        if (op == 'warn') {
          console.log('warn op');
        } else if ('del') {
          console.log('del op');
        }
      } else {
        console.log('You are not sure');
      }
    })
  }
  
  // 复制 举报 删除
  $scope.opClick = function(op) {
    $scope.popover.hide();
    if (op == 'copy') {
      $rootScope.copyContent = '复制内容';
    }else if (op == 'warn') {
      showDialog('warn','是否举报此内容?');
    }else if (op == 'del') {
      showDialog('del','是否删除此内容?');
    }
  }
  
  // 发送消息
  $scope.sendInfo = function(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('sendinfo');
    return false;
  }
  
  // 关闭shadow
  $scope.closeShadow = function(e) {    
    e.stopPropagation();
    e.preventDefault();
    $scope.commentmodal.hide();    
    return false;
  }
  
  });
