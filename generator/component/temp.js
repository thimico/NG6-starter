import angular from 'angular';
import 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

export default  angular
	.module('<%= name %>', [
		'ui.router'
	])
	.component('<%= name %>', <%= name %>Component)
	.name;