import angular from 'angular';
import banco from './banco/banco';
import home from './home/home';

let componentModule = angular.module('app.components', [
  banco,
  home,
])
.name;

export default componentModule;
