import 'bootstrap-loader';
import 'font-awesome-loader';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'sweetalert2/dist/sweetalert2.css';
import 'angular-loading-bar/build/loading-bar.min.css';
import 'angular-i18n/pt-br';
import 'angular-animate';
import 'angular-toastr'
import 'angular-input-masks/br';
import 'normalize.css';
import 'angular-toastr/dist/angular-toastr.css';
import 'angular-ui-bootstrap';
import 'angular-br-filters';
import 'sweetalert2';
import 'angular-loading-bar';
import 'angular-ui-mask';


angular.module('app', [
    uiRouter,
    Common,
    Components,
    'ui.mask',
    'angular-loading-bar',
    'ui.utils.masks',
    'cfp.loadingBar',
    'ngAnimate',
    'toastr',
    'ui.bootstrap',
    'idf.br-filters',
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
