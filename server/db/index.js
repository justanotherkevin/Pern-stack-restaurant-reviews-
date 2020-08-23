const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER,
  host: 'localhost',
  database: 'practice001',
  password: 'secret123',
  port: 5432,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
};