'use strict';

/**
 * new-this-week service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-this-week.new-this-week');
