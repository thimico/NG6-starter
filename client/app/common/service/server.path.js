export default function($location) {
	"ngInject";
	return {getApiPath: function() {
		return $location.protocol() + "://" + $location.host() +":";
		//+ $location.port() + window.location.pathname + "api"
	}};
};