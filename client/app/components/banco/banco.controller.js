import BaseController from '../../base/base.controller';

class BancoController extends BaseController {
  /*@ngInject*/

  constructor(bancoService, $uibModal, SweetAlert, messageFactory, $stateParams) {
    super(bancoService, $uibModal, SweetAlert, messageFactory, $stateParams ? $stateParams.hideNavbar : false);
    this.title = 'Bancos';
    this.entityName = 'Banco';
    this.formComponent = 'bancoEditModal';
    this.search();
  }
}


export default BancoController;
