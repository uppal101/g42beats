
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('groups').del()
        .then(function() {
            // Inserts seed entries
            return knex('groups').insert([
                {
                    id: 1,
                    group_name: 'g42',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ])
            .then(() => {
                return knex.raw("SELECT setval('groups_id_seq', (SELECT MAX(id) FROM groups))");
            });
        });
};
