'use strict';

/**
 * refer-a-friend service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::refer-a-friend.refer-a-friend');
