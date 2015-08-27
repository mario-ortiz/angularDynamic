(function(){
	angular.module('demoApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/components/auth/login.html',
				controller: 'loginCtrl'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'app/components/home/index.html',
				controller: 'homeCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/components/home/about.html',
				controller: 'aboutCtrl'
			})
			;

	}]);
})();