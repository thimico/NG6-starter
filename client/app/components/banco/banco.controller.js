import BaseController from '../../base/base.controller';

class BancoController extends BaseController {
  /*@ngInject*/

  constructor(bancoService, $uibModal, $stateParams) {
    super(bancoService, $uibModal, $stateParams);
    this.title = 'Bancos';
    this.entityName = 'Banco';
    this.formComponent = 'bancoEditModal';
    this.paginated = false;
    this.search();
  }
}

export default BancoController;
