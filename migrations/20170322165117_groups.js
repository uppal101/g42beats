
exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', (table) => {
    table.increments('id').primary();
    table.string('group_name').notNullable().defaultTo('');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
