import BaseEditController from '../../../base/base.edit.controller';

class BancoEditController extends BaseEditController {
  /*@ngInject*/
  constructor(bancoService, $scope) {
    super(bancoService, $scope);
  }
}

export default BancoEditController;
