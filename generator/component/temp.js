import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './<%= dotName %>.html';
import controller from './<%= dotName %>.controller';
import <%= name %>EditModal from './<%= dotName %>.edit.modal/<%= dotName %>.edit.modal';
import './<%= dotName %>.styl';

let component = {
  template,
  controller,
  restrict: 'E',
  controllerAs: 'vm',
  bindings: {}
};

let module = angular.module('<%= dotName %>', [
  uiRouter,
  <%= name %>EditModal,
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>?hideNavbar',
      component: '<%= name %>'
    });
})
.component('<%= name %>', component)
.name;

export default module;
