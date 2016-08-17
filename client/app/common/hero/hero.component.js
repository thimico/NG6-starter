import template from './hero.html';
import controller from './hero.controller';
import './hero.styl';

let heroComponent = {
  restrict: 'E',
  bindings: {},
  controllerAs: 'vm',
  template,
  controller
};

export default heroComponent;
