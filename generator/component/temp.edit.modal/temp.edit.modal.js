import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-animate';
import services from '../../../service/service';
import common from '../../../common/common';
import controller from './<%= dotName %>.edit.modal.controller';
import template from './<%= dotName %>.edit.modal.html'

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
}

let module = angular.module('<%= dotName %>.edit.modal', [
  'ui.router',
  'ngResource',
  'ngAnimate',
  services,
  common,
])
.component('<%= name %>EditModal', component)
.name;

export default module;
