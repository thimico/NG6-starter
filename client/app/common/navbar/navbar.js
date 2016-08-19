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
.component('navbar', component)
.name;

export default module;
