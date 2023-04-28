module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pdps',
      handler: 'pdp.findOne',
      config: {
        auth: false
      }
    }
  ]
}