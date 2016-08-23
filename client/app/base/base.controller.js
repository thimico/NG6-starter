/*global _:true*/
/*global swal:true*/

export default class BaseController {
  constructor(entityService, $uibModal, messageFactory, $stateParams) {
    this.entityService = entityService;
    this.$uibModal = $uibModal;
    this.messageFactory = messageFactory;
    this.itemsPerPage = 5;
    this.infiniteScroll = {numToAdd:20, currentItems:20};
    this.hideNavbar = $stateParams ? $stateParams.hideNavbar : false;
  }

  clear() {
    this.filter = {};
    this.search();
  }

  search() {
    if (this.paginated) {
      this.searchPaginated(this.pagination);
    } else {
      this.entityService.findAll(this.filter).$promise
        .then(success => this.listaEntidade = success);
    }
  }

  searchPaginated(pagination) {
    this.entityService.findAllPaginated(pagination, this.filter).$promise.then(success => {
      if (this.pagination) {
        this.tableState.pagination.totalItemCount = success.totalElements;
        this.tableState.pagination.numberOfPages = success.totalPages;
      }
      this.page = success;
    });
  }

  new(params, config) {
    this.openModal(null, `Cadastrar ${this.entityName}`, this.formComponent, params, config)
      .then(() => {
        this.messageFactory.addSuccess('Registro cadastrado com sucesso!', true);
        this.search();
      });
  }

  edit(id, params, config) {
    this.entityService.obterUm(id).$promise.then( success => {
      let entidade = success;
      this.openModal(entidade, `Editar ${this.entityName}`, this.formComponent, params, config)
        .then(() => {
          this.messageFactory.addSuccess('Registro atualizado com sucesso!', true);
          this.search();
        });
    });
  }

  view(id, params, config) {
    this.entityService.obterUm(id).$promise.then( success => {
      let entidade = success;
      this.openModal(entidade, `Visualizar ${this.entityName}`, this.viewComponent, params, config)
        .then(() => this.search());
    });
  }

  remove(id) {
    swal({
      title: `Remover ${this.entityName}`,
      text: 'Tem certeza que deseja remover o Registro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Sim, remover!',
      cancelButtonText: 'Não, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger'
    }).then(() => {
      this.entityService.remover(id).$promise.then(
        () => {
          this.SweetAlert.swal('Removido!', 'O Registro foi removido com sucesso.', 'success');
          this.search();
        },
        () => {
          this.SweetAlert.swal('Erro!', 'Não foi possível excluir esse Registro.\n Ele já está associado a outra entidade.', 'error');
          this.search();
        });
    });
  }

  setPagination() {
    if (this.tableState) {
      this.pagination = {
        page: this.tableState.pagination.start / this.tableState.pagination.number,
        size: this.tableState.pagination.number,
        direction: this.tableState.sort.reverse === false ? 'ASC' : 'DESC',
        sortBy: this.tableState.sort.predicate || ''
      };
    }
  }

  onPipe(tableState) {
    let vm = this.$parent.vm;
    if (!vm.tableState) {
      vm.tableState = tableState;
    }

    vm.setPagination();

    vm.search();
  }

  openModal(entity, title, component, params, config) {
    if (!config) {
      config = {};
    }

    let modalDefaults = {
      component,
      backdrop: true,
      keyboard: true,
      modalFade: true,
      size: 'lg',
      resolve: {
        modalParams: {entity,title,params} 
      }
    }

    _.merge(config, modalDefaults)

    return this.$uibModal.open(config).result;
  }

  resetInfScroll() {
    this.infiniteScroll.currentItems = this.infiniteScroll.numToAdd;
  }

  addMoreItems(){
     this.infiniteScroll.currentItems += this.infiniteScroll.numToAdd;
  }
}
