import angular from 'angular';
import message from './message/message';
import navbar from './navbar/navbar';
import title from './title/title';
import hero from './hero/hero';
import user from './user/user';

let commonModule = angular.module('app.common', [
  message,
  navbar,
  title,
  hero,
  user,
])
.name;

export default commonModule;
