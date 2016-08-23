import BaseEditController from '../../../base/base.edit.controller';

class BancoEditController extends BaseEditController{
  /*@ngInject*/
  constructor(bancoService, ModalParams, $scope) {
    super(bancoService, ModalParams, $scope);
  }
}

export default BancoEditController;
