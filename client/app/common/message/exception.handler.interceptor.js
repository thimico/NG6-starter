export default function(messageFactory) {
	'ngInject';
  return {
    'response': function (response) {
      return response;
    },
    'responseError': function(error) {

      if(error.status == 400 && error.data.message)
      messageFactory.addError(error.data.message, 2000);

      throw error;
    }
  };
}
