import template from './<%= name %>.html!text';
import controller from './<%= name %>.controller';
import './<%= name %>.css!';

export default {

	template,
	controller,
	restrict: 'E',
	controllerAs: 'vm',
	bindToController: true
};