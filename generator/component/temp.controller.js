import BaseController from '../../base/base.controller';

class <%= upCaseName %>Controller extends BaseController {
  /*@ngInject*/
  constructor(<%= name %>Service, $uibModal, messageFactory, $stateParams) {
    super(<%= name %>Service, $uibModal, messageFactory, $stateParams);
    this.title = '<%= name %>s';
    this.entityName = '<%= name %>';
    this.formComponent = '<%= name %>EditModal';
    this.paginated = false;
  }
}

export default <%= upCaseName %>Controller;
