import BaseService from './base.service';

class bancoService extends BaseService {
  /*@ngInject*/
  constructor(Restangular) {
    super(Restangular, 'bancos');
  }

}

export default bancoService;
