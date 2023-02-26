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
    const { productId } = ctx.params;
    const { populate } = ctx.query

    console.log('product_id', ctx.params)

    let newEntity
    const entity = await strapi.entityService.findMany('api::pdp.pdp', {
      filters: { product_id: productId },
      populate: queryPopulate(populate),
    })

 

    if (entity.length < 1) {
      newEntity = null
    } else {
      if (entity[0].publishedAt === null) {
        newEntity = null
      } else {
        newEntity = entity[0]
      }
    }

    const sanitizedEntity = await this.sanitizeOutput(newEntity)

    return this.transformResponse(sanitizedEntity)
  }
}));
