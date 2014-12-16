'use strict';

angular.module('angkyut', ['ngAnimate', 'ngTouch', 'ngResource', 'ui.router', 'mgcrea.ngStrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
