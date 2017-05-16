// Update with your config settings.


module.exports = {
  development: {
    client: "pg",
    connection: "postgress://localhost/g42beats_dev",
    migrations: {
      tableName: "knex_migrations"
    }
  },

  test: {
    client: "pg",
    connection: "postgress://localhost/g42beats_test",
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
