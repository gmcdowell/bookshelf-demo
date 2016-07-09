// Update with your config settings.

// enable Babel transpilation of all migrations and seed when run from cmd line
require('babel-core/register');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'greg',
      password: 'password',
      database: 'bookshelf-demo',
      charset: 'utf8'
    },
    debug: false,
    migrations: {
      tableName: 'migrations',
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    },
    pool: {
      min: 1,
      max: 1
    }
  }
};
