export default class BaseService {
  constructor(ApiFactory, params) {
    this._api = ApiFactory;
    this.params = params
  }

  criar(entity) {
    return this._api.save(this.params, entity);
  }

  atualizar(entity) {
    return this._api.update(this.params, entity);
  }

  obterUm(cod) {
    let parametros = {cod};
    _.merge(parametros, this.params);
    return this._api.get(parametros);
  }

  obterTodos(filtro) {
    if (filtro) {
      return this._api.filter(this.params, filtro);
    }
    return this._api.query(this.params);
  }

  remover(cod) {
    let parametros = {cod};
    _.merge(parametros, this.params);
    return this._api.delete(parametros);
  }
}
