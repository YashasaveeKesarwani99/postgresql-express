const GETEMiSSION = 'SELECT * FROM emission';

const GETEMISSIONBYPARAMS = 'SELECT * FROM emission WHERE country = $1 AND year BETWEEN $2 AND $3 AND parameter = $4'

const ADDEMISSIONS = 'INSERT INTO emission (country, year, value, parameter) VALUES ($1, $2, $3, $4)'


module.exports = {
    GETEMiSSION,
    GETEMISSIONBYPARAMS,
    ADDEMISSIONS
}