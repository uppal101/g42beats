
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('cascade');
    table.integer('song_id').references('id').inTable('songs').notNullable().onDelete('cascade');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('playlist');
};
