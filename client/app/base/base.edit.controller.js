export default class BaseEditController {
  constructor(entityService, $scope, messageFactory) {
    this.entityService = entityService;
    this.messageFactory = messageFactory;
    this.title = this.resolve.modalParams.title;
    this.params = this.resolve.modalParams.params;
    this.$scope = $scope;
    this.infiniteScroll = {};
    this.infiniteScroll.numToAdd = 20;
    this.infiniteScroll.currentItems = 20;

    if (!this.resolve.modalParams.entity) {
      this.isEdicao = false;
      this.entity = {};
    } else {
      this.isEdicao = true;
      this.entity = this.resolve.modalParams.entity;
    }
  }

  resetInfScroll() {
    this.infiniteScroll.currentItems = this.infiniteScroll.numToAdd;
  }

  addMoreItems(){
     this.infiniteScroll.currentItems += this.infiniteScroll.numToAdd;
  }

  criarContinuar(entity) {
    this.entityService.criar(entity).$promise
      .then(() => {
        this.messageFactory.addSuccess('Registro cadastrado com sucesso!', true);
        this.resetarEntidade();
      }
    );
  }

  resetarEntidade() {
    this.entity = {};
  }

  criar(entity) {
    this.entityService.criar(entity).$promise
      .then(success => {
        this.$scope.$close(success);
      }
    );
  }

  atualizar(entity) {
    this.entityService.atualizar(entity).$promise
      .then(success => {
        this.$scope.$close(success);
      }
    );
  }
}
