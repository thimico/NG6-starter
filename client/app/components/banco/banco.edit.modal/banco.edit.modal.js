import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-animate';
import services from '../../../services/services';
import common from '../../../common/common';
import controller from './banco.edit.modal.controller';
import template from './banco.edit.modal.html'

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {}
}

let module = angular.module('banco.edit.modal', [
  'ui.router',
  'ngResource',
  'ngAnimate',
  services,
  common,
])
.component('BancoEditModal', component)
.name;

export default module;
