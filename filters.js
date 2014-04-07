angular.module('windFilters', []).filter('deg2direction', function() {
    return function(input) {
    		var val=Math.round((input/22.5)+.5);
    		var arr=["北","北北東","北東","東北東","東","東南東", "南東", "南南東","南","南南西","南西","西南西","西","西北西","北西","北北西"];
    		return arr[(val % 16)];
    	 };
});
		