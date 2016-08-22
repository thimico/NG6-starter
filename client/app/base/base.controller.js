export default class BaseController {
  constructor(entityService, modalService, SweetAlert, messageFactory, hideNavbar) {
    this.entityService = entityService;
    this.SweetAlert = SweetAlert;
    this.messageFactory = messageFactory;
    this.$uibModal = $uibModal;
    this.itensPorPagina = 5;
    this.infiniteScroll = {numToAdd:20, currentItems:20};
    this.hideNavbar({hideNavbar});
  }

  resetInfScroll(isOpen) {
    this.infiniteScroll.currentItems = this.infiniteScroll.numToAdd;
  };

  addMoreItems(){
     this.infiniteScroll.currentItems += this.infiniteScroll.numToAdd;
  };

  clear() {
    this.filtro = {};
    this.search();
  }

  search() {
    this.entityService.obterTodos(this.filtro).$promise.then(success => this.listaEntidade = success);
  }

  save(params, config) {
    this.openModal(null, `Cadastrar ${this.entityName}`, this.formComponent, params, config)
      .then((success) => {
        this.messageFactory.addSuccess('Registro cadastrado com sucesso!', true);
        this.search();
      });
  }

  edit(id, params, config) {
    this.entityService.obterUm(id).$promise.then( success =>  {
      let entidade = success;
      this.openModal(entidade, `Editar ${this.entityName}`, this.formComponent, params, config)
        .then((success) => {
          this.messageFactory.addSuccess('Registro atualizado com sucesso!', true);
          this.search();
        });
    });
  }

  view(id, params, config) {
    this.entityService.obterUm(id).$promise.then( success =>  {
      let entidade = success;
      this.openModal(entidade, `Visualizar ${this.entityName}`, this.viewComponent, params, config)
        .then((success) => this.search());
    });
  }

  remove(id) {
    this.SweetAlert.swal({
      title: `Remover ${this.entityName}`,
      text: "Tem certeza que deseja remover o Registro?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Sim, remover!",
      cancelButtonText: "Não, cancelar!",
      closeOnConfirm: false,
      closeOnCancel: true },
      (isConfirm) => {
        if (isConfirm) {
          this.entityService.remover(id).$promise.
          then(
            success => {
              this.SweetAlert.swal("Removido!", "O Registro foi removido com sucesso.", "success");
              this.search();
            },
            error => {
              this.SweetAlert.swal("Erro!", "Não foi possível excluir esse Registro.\n Ele já está associado a outra entidade.", "error");
              this.search();
            });
        }
      });
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
        ModalParams: () => {entity,title,params}
      }
    }

    _.merge(config, modalDefaults)

    return this.$uibModal.open(config).result;
  }
}
