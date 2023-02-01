const axios = require('axios');

module.exports = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

  await strapi.query('hit').create({
    date: new Date(),
    data: data
  });
};