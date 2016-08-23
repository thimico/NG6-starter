export default function($resource, $location) {
  'ngInject';
  return $resource(`${$location.protocol()}://${$location.host()}:8080/stcaspweb/api/:root/:resource/:action/:cod`, {}, {
    'update': {
      method: 'PUT'
    },
    'edit': {
      method: 'PATCH'
    },
    'getPage': {
      method: 'GET',
      params: {
        action: 'filtrar'
      }
    },
    'filterPage': {
      method: 'POST',
      params: {
        action: 'paginated'
      }
    },
    'filter': {
      method: 'POST',
      isArray: true,
      params: {
        action: 'filtrar'
      }
    },
    'download': {
      method: 'GET',
      transformResponse: function(data, headers){
        let response = {};
        response.data = data;
        response.headers = headers();
        return response;
      },
      responseType: 'arraybuffer',
    }
  });
}
