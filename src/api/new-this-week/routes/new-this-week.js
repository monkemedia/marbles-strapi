'use strict';

/**
 * new-this-week router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::new-this-week.new-this-week');
