module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pdps/:productId',
      handler: 'pdp.findOne',
      config: {
        auth: false
      }
    }
  ]
}