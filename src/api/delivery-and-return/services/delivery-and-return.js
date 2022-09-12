'use strict';

/**
 * delivery-and-return service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::delivery-and-return.delivery-and-return');
