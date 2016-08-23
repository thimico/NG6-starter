export default function($timeout, $injector) {
  'ngInject';

  // Private functions and internal state
  var internal = {

    alerts: [],

    addAlert: function(type, message, autoClose) {
      let toastr = $injector.get('toastr');
      toastr[type](message,{allowHtml: true, autoClose});
    },

    removeAlert: function(alert) {
      internal.alerts.splice( internal.alerts.indexOf(alert), 1);
    }
  };

  // Return the public API for the service
  // We'll expose the `alerts` array for convenience
  return {
    addError: function(message, autoClose) {
      internal.addAlert('error', message, autoClose);
    },
    addWarning: function(message, autoClose) {
      internal.addAlert('warning', message, autoClose);
    },
    addSuccess: function(message, autoClose) {
      internal.addAlert('success', message, autoClose);
    },

    alerts: internal.alerts
  };
}
