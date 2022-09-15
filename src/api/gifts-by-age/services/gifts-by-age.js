'use strict';

/**
 * gifts-by-age service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gifts-by-age.gifts-by-age');
