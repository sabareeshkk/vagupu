var myApp = angular.module('vagupu', ['ui.router', 'ngMessages']);

/**
@param $stateProvider[object] manage states
@param $urlRouterProvider[object] manage url-routing
*/
myApp.config(function($stateProvider, $urlRouterProvider) {

  const LoginState = {
    name: 'login',
    url: '/login',
    controller:'LoginCtrl',
    controllerAs: 'login',
    templateUrl: 'pages/login.html'
  }

  const HomeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'pages/home.html'
  }

  $stateProvider.state(LoginState);
  $stateProvider.state(HomeState);

  $urlRouterProvider.otherwise('/login');

})