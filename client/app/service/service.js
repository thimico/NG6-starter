import angular from 'angular';
import base from '../base/base';
import bancoService from './banco.service';
import programaService from './programa.service';
import 'angular-resource';

let serviceModule = angular.module('app.service', [
  'ngResource',
  base,
])
.service('bancoService', bancoService)
.service('programaService', programaService)
.name;

export default serviceModule;
