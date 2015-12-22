import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Service from './service/service';

export default angular
	.module('app.common', [
		Navbar,
		Hero,
		User,
		Service
	])
	.name;