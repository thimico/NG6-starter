export default class BaseEditController {
  constructor(entityService, messageFactory) {
    this.entityService = entityService;
    this.messageFactory = messageFactory;
    this.title = this.resolve.modalParams.title;
    this.params = this.resolve.modalParams.params;
    this.infiniteScroll = {};
    this.infiniteScroll.numToAdd = 20;
    this.infiniteScroll.currentItems = 20;

    if (!this.resolve.modalParams.entity) {
      this.isEdit = false;
      this.entity = {};
    } else {
      this.isEdit = true;
      this.entity = this.resolve.modalParams.entity;
    }
  }

  resetInfScroll() {
    this.infiniteScroll.currentItems = this.infiniteScroll.numToAdd;
  }

  addMoreItems(){
     this.infiniteScroll.currentItems += this.infiniteScroll.numToAdd;
  }

  saveAndContinue(entity, isInvalid) {
    if (isInvalid) {
      this.submitted = true;
      return;
    }
    this.entityService.save(entity).$promise
      .then(() => {
        this.messageFactory.addSuccess('Registro cadastrado com sucesso!', true);
        this.resetEntity();
      }
    );
  }

  resetEntity() {
    this.submitted = false;
    this.entity = {};
  }

  tooltipThis(errors) {
    if (!errors) {
      return '';
    }

    if (errors.required) {
      return 'Campo Obrigatório';
    }
  }

  save(entity, isInvalid) {
    if (isInvalid) {
      this.submitted = true;
      return;
    }
    this.entityService.save(entity).$promise
      .then(success => {
        this.close(success);
      }
    );
  }

  update(entity, isInvalid) {
    if (isInvalid) {
      this.submitted = true;
      return;
    }
    this.entityService.update(entity).$promise
      .then(success => {
        this.close(success);
      }
    );
  }
}
