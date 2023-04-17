// 'use strict';

// /**
//  * homepage router.
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::homepage.homepage');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/homepage',
      handler: 'homepage.findOne',
      config: {
        auth: false
      }
    }
  ]
}