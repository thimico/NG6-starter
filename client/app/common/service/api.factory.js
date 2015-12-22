export default function($resource, ServerPath) {
	"ngInject";
	return $resource(ServerPath.getApiPath() + '5000/:resource/:action/:id', {}, {
			'update': {
				method: 'PUT'
			},
			'edit': {
				method: 'PATCH'
			}
		}
	);
};