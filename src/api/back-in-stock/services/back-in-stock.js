'use strict';

/**
 * back-in-stock service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::back-in-stock.back-in-stock');
