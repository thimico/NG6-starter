import BaseController from '../../base/base.controller';

class BancoController extends BaseController {
  /*@ngInject*/

  constructor(bancoService, $uibModal, messageFactory, $stateParams) {
    super(bancoService, $uibModal, messageFactory, $stateParams);
    this.title = 'Bancos';
    this.entityName = 'Banco';
    this.formComponent = 'bancoEditModal';
    this.paginated = false;
    this.search();
  }

  teste() {
    this.messageFactory.addSuccess('Registro cadastrado com sucesso!', true);
  }
}

export default BancoController;
