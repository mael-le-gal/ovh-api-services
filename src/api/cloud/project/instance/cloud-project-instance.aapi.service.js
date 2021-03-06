angular.module('ovh-api-services').service('OvhApiCloudProjectInstanceAapi', ($resource, OvhApiCloudProjectInstance) => {
  const instancesResource = $resource('/cloud/project/:projectId/instance/monitoring', {
    projectId: '@projectId',
  }, {
    monitoring: {
      url: '/cloud/project/:projectId/instance/monitoring',
      cache: OvhApiCloudProjectInstance.cache,
      method: 'GET',
      serviceType: 'aapi',
    },
    summary: {
      url: '/cloud/project/:projectId/instance/:instanceId/summary',
      cache: OvhApiCloudProjectInstance.cache,
      method: 'GET',
      serviceType: 'aapi',
      params: {
        instanceId: '@instanceId',
      },
    },
  });

  return instancesResource;
});
