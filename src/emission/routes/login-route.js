const { Router } = require('express')
const controller = require('../controller')


const loginRouter = Router();

loginRouter.post('/login',controller.login)

module.exports = loginRouter