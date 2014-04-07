var windControllers = angular.module('windControllers',[]);

windControllers.controller('ListCtrl', function($scope, $http) { 
	$scope.weathers = [];// 配列生成
	var places = ['Hikone','Tsuruga','shirahama','tsu'];

	for(var i=0 ; i < places.length; i++ ){
		$http.get('http://api.openweathermap.org/data/2.5/weather?q='+places[i] + ',jp').success(function(data){
			$scope.weathers.push(data);
		});
	}
});
