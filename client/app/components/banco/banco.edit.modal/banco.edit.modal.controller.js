import BaseEditController from '../../../base/base.edit.controller';

class BancoEditController extends BaseEditController {
  /*@ngInject*/
  constructor(bancoService, messageFactory) {
    super(bancoService, messageFactory);
  }
}

export default BancoEditController;
