class HomeController {
	/*@ngInject*/
	constructor(ApiFactory){
		this.ApiFactory = ApiFactory;
		this.name = this.obterNome();
	}
	
	obterNome() {
		this.ApiFactory.get({resource:'posts', id:'1'}).$promise
			.then(success => this.name = success.title);
	}
}

export default HomeController;