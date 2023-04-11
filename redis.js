const redis = require('redis');
const cache = require('express-redis-cache')({
  client: redis.createClient(),
});

module.exports = cache;