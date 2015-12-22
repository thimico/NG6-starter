import angular from 'angular';
import ApiFactory from './api.factory';
import ServerPath from './server.path';

export default angular
	.module('service', [])
	.factory('ServerPath', ServerPath)
	.factory('ApiFactory', ApiFactory)
	.name;