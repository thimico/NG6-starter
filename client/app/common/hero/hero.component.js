import template from './hero.html!text';
import controller from './hero.controller';
import './hero.css!';

export default {
	template,
	controller,
	restrict: 'E',
	controllerAs: 'vm',
	bindings: {}
};