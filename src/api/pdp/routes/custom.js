module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pdps/:sku',
      handler: 'pdp.findOne',
      config: {
        auth: false
      }
    }
  ]
}