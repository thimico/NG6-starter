import angular from 'angular';
import 'angular-ui-router';
import navbarComponent from './navbar.component';

export default angular
	.module('navbar', [
		'ui.router'
	])
	.component('navbar', navbarComponent)
	.name;