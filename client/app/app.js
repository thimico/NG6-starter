import 'bootstrap-loader';
import 'font-awesome-loader';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'angular-input-masks/br';
import 'normalize.css';
import 'angular-ui-bootstrap';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    'ui.utils.masks',
    'ui.bootstrap',
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
