// Update with your config settings.

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
            max: 1
        }
    }
};
