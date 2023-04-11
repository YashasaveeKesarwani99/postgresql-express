const express = require('express')
require('dotenv').config();

const emissionRoutes = require('./src/emission/routes/protected-routes')
const loginRoutes = require('./src/emission/routes/login-route')


const app = express();

app.use(express.json())

app.use('/',loginRoutes)

app.use('/ghg-emissions',emissionRoutes)

app.listen(process.env.PORT,(req,res)=>{
    console.log(`run ho rha mast ekdum, no tension - on ${process.env.PORT}`)
})