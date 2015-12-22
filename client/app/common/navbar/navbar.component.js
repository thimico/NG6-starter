import template from './navbar.html!text';
import controller from './navbar.controller';
import './navbar.css!';

export default {
	template,
	controller,
	restrict: 'E',
	controllerAs: 'vm',
	bindings: {}
};