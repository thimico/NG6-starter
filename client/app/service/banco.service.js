import BaseService from '../base/base.service'

class bancoService extends BaseService {
  /*@ngInject*/
  constructor(apiFactory) {
    super(apiFactory, {resource: 'bancos'});
  }

}

export default bancoService;
