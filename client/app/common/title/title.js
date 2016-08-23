import angular from 'angular';
import template from './title.html';
import controller from './title.controller';
import './title.styl';
import 'angular-ui-router';

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {
    title: '<'
  }
};

let module = angular.module('title', [
  'ui.router'
])
.component('pageTitle', component)
.name;

export default module;
