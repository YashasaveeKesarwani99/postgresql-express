const { Pool } = require('pg');


const pool = new Pool({
    user:'yash',
    host:'localhost',
    database:'emissions',
    password:process.env.PASSWORD,
    port:5432,
});

module.exports = pool;