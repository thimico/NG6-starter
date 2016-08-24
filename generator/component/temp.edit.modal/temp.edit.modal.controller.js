import BaseEditController from '../../../base/base.edit.controller';

class <%= upCaseName %>EditController extends BaseEditController {
  /*@ngInject*/
  constructor(<%= name %>Service, $scope) {
    super(<%= name %>Service, $scope);
  }
}

export default <%= upCaseName %>EditController;
