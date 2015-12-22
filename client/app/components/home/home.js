import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import homeComponent from './home.component';
import Service from '../../common/service/service';

export default angular
	.module('home', [
		'ui.router',
		'ngResource',
		Service
	])
	
	.config(($stateProvider, $urlRouterProvider)=>{
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				template: '<home></home>'
			});
	})
	.component('home', homeComponent)
	.name;