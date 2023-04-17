'use strict';

/**
 *  homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) =>({

  async findOne(ctx) {
    const { populate } = ctx.query

    const entity = await strapi.entityService.findMany('api::homepage.homepage', {
      populate,
    })

    const newEntity = {
      ...entity,
      hero: entity.hero?.filter(item => item.is_visible)
    }

    const sanitizedEntity = await this.sanitizeOutput(newEntity)

    return this.transformResponse(sanitizedEntity)
  }
}));
