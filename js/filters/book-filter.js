angular.module("book.filters", [])
.filter('highlight',["$sce",function($sce){
	/**
	 * 搜索模糊匹配文字高亮显示
	 * @param {Object} text  搜索出来的内容
	 * @param {Object} search  输入框输入的模糊匹配的文字（比如大区）
	 */
    return function(text, search){
        if (!search) {
            return $sce.trustAsHtml(text);
        }
        var regex = new RegExp(search, 'gi');
        
        var result = text.replace(regex, '<span class="highlightedText">$&</span>');
        return $sce.trustAsHtml(result);
    };
}]);