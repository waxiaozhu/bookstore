angular.module('book.recommand', ['ngAnimate'])
 .controller('recommandController', function($scope, $state, $ionicSlideBoxDelegate, $timeout) {
   console.log('recommand')
   $scope.items = [
    {
      picUrl:'./images/tempImages/banner.jpg',
      url:"https://www.baidu.com"
    },
    {
      picUrl:'./images/tempImages/banner.jpg',
      url:'https://www.baidu.com'
    },
    {
      picUrl:'./images/tempImages/banner.jpg',
      url:'https://www.baidu.com'
    }
   ];
   
   $scope.currentSlide = 0;
   $scope.slideHasChanged = function (index) {
        $scope.slideIndex = index; 
        $scope.currentSlide = index;
        if ( ($ionicSlideBoxDelegate.count() - 1 ) == index ) {  
            $timeout(function(){ 
                $ionicSlideBoxDelegate.slide(0);  
            },2000);  
        } 
   }
   
   $scope.toDetailUrl = function (url) {
      window.location.href = url;
    };

   // 数据
   $scope.dataList = [
    {
      imgUrl: './images/tempImages/book.jpg',
      title: '穷查理宝典',
      content: '巴菲特的导师查理.芒格语录，本书首次收录了查理过去20年来主要的公开的演讲，书中十一篇讲稿全面的展示了我的才能呀，小公主的幸福生活在古堡中',
      author: '张云新'
    },
    {
      imgUrl: "./images/tempImages/book1.jpg",
      title: '游戏改变生活',
      content: '世界所有的玩家花在<<魔兽世界>>上的总时间超过593万年，相当于从人类祖先第一次站起身来演讲的到至今的生活的人们的我们原始人的兴趣仅仅是打猎么',
      author: '张云新'
    },
    {
      imgUrl: './images/tempImages/book.jpg',
      title: '引爆点',
      content: '许多难以理解的流行潮 背后的原因，并且发现其中的元素，说明如果能够掌握这些因素，就可以轻易的展示全栈的行为么，我们原始数据的咖啡的元素因果',
      author: '张云新'
    },
    {
      imgUrl: './images/tempImages/book1.jpg',
      title: '穷查理宝典',
      content: '巴菲特的导师查理.芒格语录，本书首次收录了查理过去20年来主要的公开的演讲，书中十一篇讲稿全面的展示了我的才能呀，小公主的幸福生活在古堡中',
      author: '张云新'
    },
    {
      imgUrl: "./images/tempImages/book.jpg",
      title: '游戏改变生活',
      content: '世界所有的玩家花在<<魔兽世界>>上的总时间超过593万年，相当于从人类祖先第一次站起身来演讲的到至今的生活的人们的我们原始人的兴趣仅仅是打猎么',
      author: '张云新'
    },
    {
      imgUrl: './images/tempImages/book1.jpg',
      title: '引爆点',
      content: '许多难以理解的流行潮 背后的原因，并且发现其中的元素，说明如果能够掌握这些因素，就可以轻易的展示全栈的行为么，我们原始数据的咖啡的元素因果',
      author: '张云新'
    }
  ]; 
  
  
  $scope.goBookDetail = function() {
    $state.go('bookdetail.comment');
  }
 });
