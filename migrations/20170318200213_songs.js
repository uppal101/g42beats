
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('cascade');
    table.string('song_name').notNullable().defaultTo('');
    table.string('artist').notNullable().defaultTo('');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs');
};
