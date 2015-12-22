import angular from 'angular';
import 'angular-ui-router';
import heroComponent from './hero.component';

export default angular
	.module('hero', [
		'ui.router'
	])
	.component('hero', heroComponent)
	.name;