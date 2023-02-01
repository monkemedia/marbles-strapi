'use strict';

/**
 *  pdp controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pdp.pdp', ({ strapi }) => ({
  async findOne(ctx) {
    console.log('ctx.params', ctx.params)
    const { sku } = ctx.params;
    const entity = await strapi.db.query('api::pdp.pdp').findOne({
      where: { sku }
    })

    const sanitizedEntity = await this.sanitizeOutput(entity)

    return this.transformResponse(sanitizedEntity)
  }
}));
