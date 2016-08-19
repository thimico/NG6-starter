import 'bootstrap-loader';
import 'font-awesome-loader';
import 'sweetalert2/dist/sweetalert2.css';
import 'angular-loading-bar/build/loading-bar.min.css';
import 'angular-toastr/dist/angular-toastr.css';
import 'ui-select/dist/select.css';
import 'normalize.css';
import 'awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Service from './service/service';
import Components from './components/components';
import AppComponent from './app.component';
import 'angular-i18n/pt-br';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-toastr';
import 'angular-ui-bootstrap';
import 'angular-ui-mask';
import 'angular-loading-bar';
import 'angular-spinner';
import 'angular-input-masks/br';
import 'angular-br-filters';
import 'angular-smart-table';
import 'sweetalert2';
import 'ui-select';
import 'ng-idle';
import 'lodash';


angular.module('app', [
    uiRouter,
    Common,
    Service,
    Components,
    'ngAnimate',
    'ngSanitize',
    'ngIdle',
    'ui.select',
    'ui.mask',
    'ui.bootstrap',
    'angular-loading-bar',
    'angularSpinner',
    'ui.utils.masks',
    'idf.br-filters',
    'cfp.loadingBar',
    'smart-table',
    'toastr',
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
