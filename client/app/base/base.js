import angular from 'angular';
import apiFactory from './api.factory';

let baseModule = angular.module('app.base', [])
.factory('apiFactory', apiFactory)
.name;

export default baseModule;
