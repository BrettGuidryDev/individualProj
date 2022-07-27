const { Pool } = require('pg');
const key = require('./ignoreme.js');

console.log(key.PG_URI);


const pool = new Pool({
  connectionString: key.PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
