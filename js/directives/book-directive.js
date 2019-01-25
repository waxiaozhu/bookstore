angular.module("book.directives", [])
 .directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attrs.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });
        }
    };
})
 .directive("loadingPage",function(){
	return {
		replace: true,
		template: '<div class="loading"><div class="loadImgWrap"><div class="loadImg"></div></div><div class="loadText">加载中...</div></div>'
	};
})
 .directive("bookSpinner", function () {
    return {
        restrict: "EA",
        replace: true,
        template: '<div class="spinner-container"><ion-spinner icon="bubbles" class="spinner-mbi"></ion-spinner><p style="font-size: 12px;color: rgba(58, 108, 224, .4);">加载中...</p></div>'
    };
})
 .directive("bookNoData", function () {
    return {
        restrict: "EA",
        template: '<div class="waiting-page">' +
        '<img src="./images/svg/nodata.svg" width="70px" alt="数据为空">' +
        '<p class="waiting-tip">数据为空</p>' +        
        '</div>',
        replace: true,
        link: function(scope, element, attrs) {
        }
    };
})
  .directive("bookNetError", function () {
    return {
        restrict: "EA",
        template: '<div class="waiting-page">' +
          '<img src="./images/svg/nodata.svg" width="70px" alt="网络错误">' +
          '<p class="waiting-tip">网络错误, 请检查网络！</p>' +        
        '</div>',
        replace: true,
        link: function(scope, element, attrs) {
        }
    };
})
  .directive('bookNum', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          $timeout(function() {
            var num = parseInt(attrs.num);
            var eleStr = element[0].innerText;
            var eleNum = Math.floor(element[0].offsetWidth/12)*num;
            if (eleStr.length > eleNum) {
              element[0].innerText = eleStr.substr(0,eleNum - 2) + ' ...';   
            }            
          }, 10);
      }
    }
  });