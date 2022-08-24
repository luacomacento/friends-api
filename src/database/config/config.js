require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'friends',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    ...this.development
  },
  production: {
    ...this.production
  },
};
