angular.module('book.search',['ngAnimate'])
.controller('searchController', function($scope) {
  console.log('searchController');
  $scope.searchBook = function() {
    console.log('搜索')
  }
  // 热门搜索
  $scope.hotSearch = [
    {
      id: 0,
      name: '商战'
    },
    {
      id: 1,
      name: '免费'
    }
  ];
  // 历史搜索
  $scope.historySearch = [
    {
      id: 0,
      name: '穷查理宝典'
    }
  ];
  
});
