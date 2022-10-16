'use strict';

/**
 * new-christmas service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-christmas.new-christmas');
