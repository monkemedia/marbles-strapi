'use strict';

/**
 *  pdp controller
 */

const queryPopulate = (populate) => {
  if (Array.isArray(populate)) {
    return populate.flatMap(value => {
      return value.split(',').map(value => value);
    })
  }
}

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pdp.pdp', ({ strapi }) => ({
  async findOne(ctx) {
    const { sku } = ctx.params;
    const { populate } = ctx.query

    let newEntity
    const entity = await strapi.entityService.findOne('api::pdp.pdp', 1, {
      filters: { sku },
      populate: queryPopulate(populate),
    })

    if (!entity.publishedAt) {
      newEntity = null
    } else {
      newEntity = entity
    }

    const sanitizedEntity = await this.sanitizeOutput(newEntity)

    return this.transformResponse(sanitizedEntity)
  }
}));
