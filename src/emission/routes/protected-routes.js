const { Router } = require('express')
const controller = require('../controller')
const middleware = require('../middleware')
const cache = require('../../../redis')

const protectedRouter = Router();

protectedRouter.get('/', middleware.verifyToken, cache.route({expire:60}), controller.getEmissionsByParams)
protectedRouter.post('/',middleware.verifyToken, controller.addEmissions)


module.exports = protectedRouter