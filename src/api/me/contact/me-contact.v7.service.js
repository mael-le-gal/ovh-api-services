angular.module('ovh-api-services').service('OvhApiMeContactV7', ($resource, $cacheFactory, apiv7) => {
  const queryCache = $cacheFactory('OvhApiMeContactv7Query');
  const otherCache = $cacheFactory('OvhApiMeContactV7');

  const userContactResource = apiv7('/me/contact/:contactId', {
    contactId: '@contactId',
  }, {
    query: {
      url: '/me/contact',
      method: 'GET',
      cache: queryCache,
      isArray: true,
      serviceType: 'apiV7',
    },
  });

  userContactResource.resetAllCache = function () {
    userContactResource.resetOtherCache();
    userContactResource.resetQueryCache();
  };

  userContactResource.resetOtherCache = function () {
    otherCache.removeAll();
  };

  userContactResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return userContactResource;
});
