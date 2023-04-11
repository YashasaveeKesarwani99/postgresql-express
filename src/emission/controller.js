const jwt = require('jsonwebtoken')
const pool = require('../../db')
const queries = require('./queries')

const getEmissions = (req,res) => {
    pool.query(queries.GETEMiSSION, (error,result)=>{
        if(error) throw error;

        res.status(200).json(result.rows)
    })
}

const getEmissionsByParams = (req,res) => {
    const { country_name, start_year, end_year, parameter } = req.query;
    

    if(!country_name) res.status(404).send('Could not find country name')

    pool.query(queries.GETEMISSIONBYPARAMS, [country_name, start_year, end_year, parameter], (error,result)=>{
        if(error) throw error;

        res.status(200).json(result.rows)
    })
}

const addEmissions = (req,res) => {
    const { country, year, value, parameter } = req.body;

    pool.query(queries.ADDEMISSIONS, [country, year, value, parameter], (error, result) => {
        if(error) throw error;

        res.status(201).send('Add hogaya bro, chick karlo get request maar ke')
    })

}

const login = (req,res) => {
    const { username, password } = req.body;

    const token = jwt.sign({id:username}, process.env.SECRETKEY, {expiresIn:'1h'})

    res.status(200).send({message:"User logeed in", token:token})
}

module.exports = {
    getEmissions,
    getEmissionsByParams,
    addEmissions,
    login,
}