const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'rentright_db',
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
