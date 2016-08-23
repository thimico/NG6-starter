import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './home.html';
import controller from './home.controller';
import './home.styl';

let component = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

let homeModule = angular.module('home', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
.component('home', component)
.name;

export default homeModule;
