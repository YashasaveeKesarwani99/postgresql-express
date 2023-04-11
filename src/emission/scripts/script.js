const fs = require('fs');
const csv = require('csv-parse');
const pool = require('../../../db');
const queries = require('../queries')

// Read the CSV file
const fileContents = fs.readFileSync('src/emission/scripts/greenhouse_gas_inventory_data.csv', 'utf8');

// Parse the csv file
csv.parse(fileContents, { columns:true }, (err,data) => {
    if(err) {
        throw err;
    }
        data.forEach((row)=>{
            const values = [row.country_or_area, row.year, row.value, row.parameter];

            pool.query(queries.ADDEMISSIONS, values, (err, result) => {
                if(err) throw err;
            })
    })
})