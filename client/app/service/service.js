import angular from 'angular';
import base from '../base/base';
import bancoService from './banco.service';
import 'angular-resource';

let serviceModule = angular.module('app.service', [
  'ngResource',
  base,
])
.service('bancoService', bancoService)
.name;

export default serviceModule;
