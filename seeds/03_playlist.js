exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('playlist').del()
        .then(function() {
            // Inserts seed entries
            return knex('playlist').insert([
                    {
                        id: 1,
                        song_id: 1,
                        user_id: 1,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 2,
                        song_id: 2,
                        user_id: 1,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 3,
                        song_id: 3,
                        user_id: 1,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 4,
                        song_id: 4,
                        user_id: 1,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 5,
                        song_id: 5,
                        user_id: 1,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 6,
                        song_id: 6,
                        user_id: 2,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 7,
                        song_id: 7,
                        user_id: 2,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 8,
                        song_id: 8,
                        user_id: 2,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 9,
                        song_id: 9,
                        user_id: 2,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 10,
                        song_id: 10,
                        user_id: 2,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 11,
                        song_id: 11,
                        user_id: 4,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 12,
                        song_id: 12,
                        user_id: 4,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 13,
                        song_id: 13,
                        user_id: 4,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 14,
                        song_id: 14,
                        user_id: 4,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 15,
                        song_id: 15,
                        user_id: 4,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 16,
                        song_id: 16,
                        user_id: 3,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 17,
                        song_id: 17,
                        user_id: 3,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 18,
                        song_id: 18,
                        user_id: 3,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 19,
                        song_id: 19,
                        user_id: 3,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 20,
                        song_id: 20,
                        user_id: 3,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 21,
                        song_id: 21,
                        user_id: 5,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 22,
                        song_id: 22,
                        user_id: 5,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 23,
                        song_id: 23,
                        user_id: 5,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 24,
                        song_id: 24,
                        user_id: 5,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 25,
                        song_id: 25,
                        user_id: 5,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 26,
                        song_id: 26,
                        user_id: 6,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 27,
                        song_id: 27,
                        user_id: 6,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 28,
                        song_id: 28,
                        user_id: 6,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 29,
                        song_id: 29,
                        user_id: 6,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 30,
                        song_id: 30,
                        user_id: 6,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 31,
                        song_id: 31,
                        user_id: 7,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 32,
                        song_id: 32,
                        user_id: 7,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 33,
                        song_id: 33,
                        user_id: 7,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 34,
                        song_id: 34,
                        user_id: 7,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 35,
                        song_id: 35,
                        user_id: 7,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 36,
                        song_id: 36,
                        user_id: 8,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 37,
                        song_id: 37,
                        user_id: 8,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 38,
                        song_id: 38,
                        user_id: 8,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 39,
                        song_id: 39,
                        user_id: 9,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 40,
                        song_id: 40,
                        user_id: 9,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 41,
                        song_id: 41,
                        user_id: 9,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 42,
                        song_id: 42,
                        user_id: 9,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 43,
                        song_id: 43,
                        user_id: 9,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 44,
                        song_id: 44,
                        user_id: 10,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 45,
                        song_id: 45,
                        user_id: 10,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 46,
                        song_id: 46,
                        user_id: 10,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 47,
                        song_id: 47,
                        user_id: 10,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 48,
                        song_id: 48,
                        user_id: 10,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 49,
                        song_id: 49,
                        user_id: 11,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 50,
                        song_id: 50,
                        user_id: 11,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 51,
                        song_id: 51,
                        user_id: 11,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 52,
                        song_id: 52,
                        user_id: 11,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 53,
                        song_id: 53,
                        user_id: 11,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 54,
                        song_id: 54,
                        user_id: 12,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 55,
                        song_id: 55,
                        user_id: 12,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 56,
                        song_id: 56,
                        user_id: 12,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 57,
                        song_id: 57,
                        user_id: 12,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 58,
                        song_id: 58,
                        user_id: 12,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 59,
                        song_id: 59,
                        user_id: 13,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 60,
                        song_id: 60,
                        user_id: 13,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 61,
                        song_id: 61,
                        user_id: 13,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 62,
                        song_id: 62,
                        user_id: 13,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 63,
                        song_id: 63,
                        user_id: 13,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 64,
                        song_id: 64,
                        user_id: 14,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 65,
                        song_id: 65,
                        user_id: 14,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 66,
                        song_id: 66,
                        user_id: 14,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 67,
                        song_id: 67,
                        user_id: 14,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                    {
                        id: 68,
                        song_id: 68,
                        user_id: 14,
                        created_at: new Date(),
                        updated_at: new Date()
                    },
                ])
                .then(() => {
                    return knex.raw("SELECT setval('playlist_id_seq', (SELECT MAX(id) FROM playlist))");
                });
        });
};
