exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('g42').del()
        .then(function() {
            // Inserts seed entries
            return knex('g42').insert([
                {
                  id: 1,
                  group_id: 1,
                  user_id: 1
                },
                {
                  id: 2,
                  group_id: 1,
                  user_id: 2
                },
                {
                  id: 3,
                  group_id: 1,
                  user_id: 3
                },
                {
                  id: 4,
                  group_id: 1,
                  user_id: 4
                },
                {
                  id: 5,
                  group_id: 1,
                  user_id: 5
                },
                {
                    id: 6,
                    group_id: 1,
                    user_id: 6
                },
                {
                    id: 7,
                    group_id: 1,
                    user_id: 7
                },
                {
                    id: 8,
                    group_id: 1,
                    user_id: 8
                },
                {
                    id: 9,
                    group_id: 1,
                    user_id: 9
                },
                {
                    id: 10,
                    group_id: 1,
                    user_id: 10
                },
                {
                    id: 11,
                    group_id: 1,
                    user_id: 11
                },
                {
                    id: 12,
                    group_id: 1,
                    user_id: 12
                },
                {
                    id: 13,
                    group_id: 1,
                    user_id: 13
                },
                {
                    id: 14,
                    group_id: 1,
                    user_id: 14
                }
            ])
            .then(() => {
                return knex.raw("SELECT setval('g42_id_seq', (SELECT MAX(id) FROM g42))");
            });
        });
};
