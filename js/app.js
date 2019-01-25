angular.module("book", ["ionic", "book.directives", 'book.filters', 'book.util', 'book.tab', 'book.recommand', 'book.dynamic', 'book.store', 'book.mine', 'book.bookdetail', 'book.bookdetailcomment', 'book.search', 'book.focus', 'book.singlepage'])

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {

        //fix that ion-scroll doesn't work on android.
        $ionicConfigProvider.scrolling.jsScrolling(true);

        $ionicConfigProvider.platform.android.tabs.style("standard");
        $ionicConfigProvider.platform.android.tabs.style("backgroundColor", "D4D4D4");
        $ionicConfigProvider.platform.android.tabs.position("bottom");
        //$ionicConfigProvider.platform.android.views.transition("ios");
        $ionicConfigProvider.platform.android.views.transition("no");

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $stateProvider
        .state("tab", {
            cache: false,
            url: "/tab",
            abstract: true,
            views: {
              "tab-home":{
                templateUrl: "./views/tabs.html",
                controller: 'tabController'
              }
            }
        })
        .state("tab.recommand", {
            url: "/recommand",
            views: {
                "tab-recommand": {
                    templateUrl: "./views/recommand/recommand.html",
                    controller: "recommandController"
                }
            }
        })
        .state("tab.dynamic", {
          url: '/dynamic',
          views: {
            "tab-dynamic": {
              templateUrl: "./views/dynamic/dynamic.html",
              controller: "dynamicController"
            }
          }
        })
        .state('tab.store', {
          url: '/store',
          views: {
              "tab-store": {
                  templateUrl: "./views/store/store.html",
                  controller: "storeController"
              }
          }
      })
      .state('tab.mine', {
          url: '/mine',
          views: {
              "tab-mine": {
                  templateUrl: "./views/mine/mine.html",
                  controller: "mineController"
              }
          }
      });
      
      $stateProvider
      .state('bookdetail', {
        cache: false,
        url: '/detail',
        views: {
          'tab-home': {
            templateUrl: "./views/bookdetail.html",
            controller: 'bookDetailController'
          }
        }
      })
      .state('bookdetail.comment', {
        url: '/comment',
        views: {
            "bookdetail-comment": {
                templateUrl: "./views/detail/comment/detailComment.html",
                controller: "detailCommentController"
            }
        }
      });
      
      $stateProvider
      .state('search', {
        url: '/search',
        views: {
          'tab-home': {
              templateUrl: "./views/search/search.html",
              controller: "searchController"
          }
        }
      });
      
      // 我的关注
      $stateProvider
      .state('focus', {
        url: '/focus',
        views: {
          'tab-home': {
              templateUrl: "./views/focus/focus.html",
              controller: "focusController"
          }
        }
      });
      
      // 个人主页
      $stateProvider
      .state('singlepage', {
        url: '/singlepage',
        views: {
          'tab-home': {
              templateUrl: "./views/singlepage/singlepage.html",
              controller: "singlepageController"
          }
        }
      });
      
      
      //init url settings
      $urlRouterProvider.otherwise("/tab/recommand");
});