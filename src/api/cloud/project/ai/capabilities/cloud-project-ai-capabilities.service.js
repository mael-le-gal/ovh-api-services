angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilities', ($injector) => ({
    Serving: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServing'),
  }));
