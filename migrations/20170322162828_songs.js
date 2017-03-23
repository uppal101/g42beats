
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id').primary();
    table.string('song_name').notNullable().defaultTo('');
    table.string('artist').notNullable().defaultTo('');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs');
};
