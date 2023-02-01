'use strict';

/**
 * pdp router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pdp.pdp', ({ strapi }) => ({
  async findOne(ctx) {
    console.log('ctx.params', ctx.params)
    const { sku } = ctx.params;
    const entity = await strapi.db.query('api::pdp.pdp').findOne({
      where: { sku }
    })

    const sanitizeEntity = await this.sanitizeEntity(entity)

    return this.transformResponse(sanitizeEntity)
  }
}));
