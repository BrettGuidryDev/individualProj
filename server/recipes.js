const { Pool } = require('pg');

const PG_URI = 'postgres://gdifhdaw:eaZWXkg7jrautbXFFJkjGBJPuYBbX-Qd@lallah.db.elephantsql.com/gdifhdaw'

const API_KEY = 'c574e17e-919c-4a85-b93a-29a5b24f8eb5'

const pool = new Pool({
    connectionString: PG_URI
});


module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };