'use strict';

const SetupEndPoint = require('./setup/');


module.exports = SetupEndPoint({
  name: 'learningMockAPI',
  urls: [
    {
      params: '/UserAdminServices/Clients/ClientApps',
      requests: [{
        method: 'GET',
        response: '/response-files/clientApps.json'
      },]

    },
    {
      params: '/UserAdminServices/ApplicationRoles',
      requests: [{
        method: 'GET',
        response: '/response-files/applicationRoles.json'
      }]
    },
    {
      params: '/IdentifiWeb/core/v1/UserProfile',
      requests:[{
        method: 'GET',
        response: '/response-files/userProfile.json'
      }]
    },
    {
      params: '/IdentifiWeb/core/v1/UserProfile1',
      requests:[{
        method: 'GET',
        response: '/response-files/userProfilev1.json'
      }]
    }
  ]
})
