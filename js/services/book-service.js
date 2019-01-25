angular.module("book.util", [])
    .factory("UtilService", function ($http) {
        return {
            getSearchParams: function (urlSearch) {
                var params = urlSearch.split('?')[1],
                    returnParams = {};
                if (params) {
                    params = params.split('&');
                    for (var i = 0; i < params.length; i++) {
                        var pkv = params[i].split('=');
                        var vpkv= pkv.slice(1);
                        returnParams[pkv[0]] = vpkv.join('=');
                    }
                    return returnParams;
                }
            }
        };
    })
.factory('commonService',["$http", "$httpParamSerializerJQLike", "$q", function($http, $httpParamSerializerJQLike, $q){
		return {
			getHttpRequest: function(url, params, successFn, errorFn){
				params.sessionId = BI.sessionId;
				params.casCookie = BI.casCookie;
				$http({
					method: 'GET',
					url: url,
					params: params,
					// headers: {
          	// sessionId: sessionId,
           //  casCookie: casCookie
					// },
					timeout: 30000
                }).success(function(data, status, headers){
					if (successFn) {
						// console.log(headers())
						successFn(data);
					}
				}).error(function(data, status, headers){
					if (errorFn) {
						errorFn();
					}
				});
			},
			getHttpRequestCache: function(url, params, successFn, errorFn){
				params.sessionId = BI.sessionId;
				params.casCookie = BI.casCookie;
				$http({
					method: 'GET',
					url: url,
					params: params,
					timeout: 30000,
					cache:true
				}).success(function(data, status, headers){
					if (successFn) {
						successFn(data);
					}
				}).error(function(data, status, headers){
					if (errorFn) {
						errorFn();
					}
				});
			},
			getPostHttpRequest: function(url, params, obj, successFn, errorFn){
				params.sessionId = BI.sessionId;
				params.casCookie = BI.casCookie;
        var jsonArray = {};
        // AI问题上报 aiFlag=true，需要传递的参数格式是key：value
        if (!obj.aiFlag) {
          jsonArray = {jsonArray: JSON.stringify(obj)};
				} else {
        	if (obj.key && obj.value) {
            jsonArray[obj.key] = obj.value;
          }
				}
				$http({
					method: 'POST',
					url: url,
					params: params,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					data: $httpParamSerializerJQLike(jsonArray),
					timeout: 30000
				}).success(function(data, status, headers){
					if (successFn) {
						successFn(data);
					}
				}).error(function(data, status, headers){
					if (errorFn) {
						errorFn();
					}
				});
			}
		};
	}])
  .factory('bookLoadingTip',['$ionicLoading', function($ionicLoading) {
    return {
      showLoading: function(message, timeValue) {
        $ionicLoading.show({
          duration: timeValue,
          template: message
        });
      },
      hideLoading: function() {
        $ionicLoading.hide();
      }
    }
  }]);