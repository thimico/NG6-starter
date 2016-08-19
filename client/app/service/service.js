import angular from 'angular';
import bancoService from './banco.service';

let serviceModule = angular.module('app.service', [
  'ngResource',
])
.service('bancoService', bancoService)
.name;

export default serviceModule;
