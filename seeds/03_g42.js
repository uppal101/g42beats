exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('g42').del()
        .then(function() {
            // Inserts seed entries
            return knex('g42').insert([
                {
                  id: 1,
                  group_id: 1,
                  user_id: 1,
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 2,
                  group_id: 1,
                  user_id: 2,
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 3,
                  group_id: 1,
                  user_id: 3,
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 4,
                  group_id: 1,
                  user_id: 4,
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 5,
                  group_id: 1,
                  user_id: 5,
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                    id: 6,
                    group_id: 1,
                    user_id: 6,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 7,
                    group_id: 1,
                    user_id: 7,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 8,
                    group_id: 1,
                    user_id: 8,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 9,
                    group_id: 1,
                    user_id: 9,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 10,
                    group_id: 1,
                    user_id: 10,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 11,
                    group_id: 1,
                    user_id: 11,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 12,
                    group_id: 1,
                    user_id: 12,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 13,
                    group_id: 1,
                    user_id: 13,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 14,
                    group_id: 1,
                    user_id: 14,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ])
            .then(() => {
                return knex.raw("SELECT setval('g42_id_seq', (SELECT MAX(id) FROM g42))");
            });
        });
};
