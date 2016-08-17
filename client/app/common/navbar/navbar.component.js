import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';

export default {
	template,
	controller,
	restrict: 'E',
	controllerAs: 'vm',
	bindings: {hideNavbar: '<'}
};
