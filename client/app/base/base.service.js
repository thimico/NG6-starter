/*global _:true*/

export default class BaseService {
  constructor(ApiFactory, params) {
    this.api = ApiFactory;
    this.params = params
  }

  save(entity) {
    return this.api.save(this.params, entity);
  }

  update(entity) {
    return this.api.update(this.params, entity);
  }

  findOne(cod) {
    return this.api.get(this._createParams({cod}));
  }

  findAll(filter) {
    if (filter) {
      return this.api.filter(this.params, filter);
    }
    return this.api.query(this.params);
  }

  findAllPaginated(pagination, filter) {
    return this.api.filterPage(this._createParams(pagination), filter);
  }

  remove(cod) {
    return this.api.delete(this._createParams({cod}));
  }

  _createParams(obj) {
    return _.merge(obj, this.params);
  }
}
