import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './banco.html';
import controller from './banco.controller';
import bancoEditModal from './banco.edit.modal/banco.edit.modal';

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {}
}

let bancoModule = angular.module('banco', [
  uiRouter,
  bancoEditModal,
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('banco', {
      url: '/bancos?hideNavbar',
      component: 'banco'
    });
})
.component('banco', component)
.name;

export default bancoModule;
