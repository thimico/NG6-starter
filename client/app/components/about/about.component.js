import template from './about.html!text';
import controller from './about.controller';
import './about.css!';

export default {
	template,
	controller,
	restrict: 'E',
	controllerAs: 'vm',
	bindings: {}
};