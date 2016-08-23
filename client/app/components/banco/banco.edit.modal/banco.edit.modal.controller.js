import BaseModalEditController from '../../base/base.modal.edit.controller';

class BancoEditController extends BaseModalEditController{
  /*@ngInject*/
  constructor(bancoService, ModalParams, $scope) {
    super(bancoService, ModalParams, $scope);
  }
}

export default BancoEditController;