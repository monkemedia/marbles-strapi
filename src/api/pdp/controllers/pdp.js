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
    const { populate, publicationState } = ctx.query

    console.log(publicationState)

 
    const entity = await strapi.db.query('api::pdp.pdp').findOne({
      where: { sku },
      populate: queryPopulate(populate),
      publicationState
    })

    const sanitizedEntity = await this.sanitizeOutput(entity)

    return this.transformResponse(sanitizedEntity)
  }
}));
