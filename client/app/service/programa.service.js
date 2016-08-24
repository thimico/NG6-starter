import BaseService from '../base/base.service'

class programaService extends BaseService {
  /*@ngInject*/
  constructor(apiFactory) {
    super(apiFactory, {resource: 'programas'});
  }

}

export default programaService;
