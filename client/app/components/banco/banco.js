import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './banco.html';
import controller from './banco.controller';

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {hideNavbar: '<'}
}

let bancoModule = angular.module('banco', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('banco', {
      url: '/bancos',
      component: 'banco'
    });
})
.component('banco', component)
.name;

export default bancoModule;
