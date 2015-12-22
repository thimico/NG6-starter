import controller from './home.controller';
import template from './home.html!text';
import './home.css!';

export default {
	template,
	controller,
	restrict: 'E',
	controllerAs: 'vm',
	bindings: {}
};