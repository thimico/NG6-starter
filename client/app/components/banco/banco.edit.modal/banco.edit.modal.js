import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-animate';
import services from '../../../service/service';
import common from '../../../common/common';
import controller from './banco.edit.modal.controller';
import template from './banco.edit.modal.html'

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {resolve: '<'}
}

let module = angular.module('banco.edit.modal', [
  'ui.router',
  'ngResource',
  'ngAnimate',
  services,
  common,
])
.component('bancoEditModal', component)
.name;

export default module;
