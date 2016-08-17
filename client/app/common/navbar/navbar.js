import angular from 'angular';
import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';
import 'angular-ui-router';

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {hideNavbar: '<'}
}

let module = angular.module('navbar', [
  'ui.router'
])
.config(($stateProvider, $urlRouterProvider)=>{
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('bancos', {
      url: '/bancos?hideNavbar',
      template: '<bancos hide-navbar="vm.setHideNavbar(hideNavbar)"></bancos>'
    });
})
.component('navbar', component)
.name;

export default module;
