import angular from 'angular';
import messageFactory from './message.factory';
import exceptionHandlerInterceptor from './exception.handler.interceptor';
import template from './message.html';
import './message.styl';

let component = function(messageFactory){
  'ngInject';
  return {
    template,
    replace: true,
    link: function (scope) {
      scope.alerts = messageFactory.alerts;
    }
  }
}

let module = angular.module('message', [])
.factory('messageFactory', messageFactory)
.factory('exceptionHandlerInterceptor', exceptionHandlerInterceptor)
.directive('message', component)
.name;

export default module;
