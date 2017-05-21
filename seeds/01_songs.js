
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('songs').del()
        .then(function() {
            // Inserts seed entries
            return knex('songs').insert([
                {
                    id: 1,
                    song_name: 'Ode to Viceroy',
                    artist: 'Mac DeMarco',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 2,
                    song_name: 'Apocalypse Dreams',
                    artist: 'Tame Impala',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 3,
                    song_name: 'Which Way to Go',
                    artist: 'Eddy Current Suppression Ring',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 4,
                    song_name: 'Snowblind',
                    artist: 'Black Sabbath',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 5,
                    song_name: 'Mt Abraxas',
                    artist: 'Uncle Acid And The Deadbeats',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 6,
                    song_name: 'Stairway to Heaven',
                    artist: 'Led Zeppelin',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 7,
                    song_name: 'Maggot Brain',
                    artist: 'Funkadelic',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 8,
                    song_name: 'Powa',
                    artist: 'tune-yards',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 9,
                    song_name: 'Dollar Bill Blues',
                    artist: 'Townes Van Zandt',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 10,
                    song_name: 'Stranger Song',
                    artist: 'Leonard Cohen',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 11,
                    song_name: 'Cant Let You Go',
                    artist: 'Fabolous',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 12,
                    song_name: 'Dance For You',
                    artist: 'Beyonce',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 13,
                    song_name: 'Acquainted',
                    artist: 'Weeknd',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 14,
                    song_name: ' Falling in Love With You',
                    artist: ' UB-40',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 15,
                    song_name: 'Stay',
                    artist: 'Kygo',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 16,
                    song_name: 'A Finer Way to Die',
                    artist: 'Griz',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 17,
                    song_name: 'Make the Road by Walking',
                    artist: 'Menahan Steet Band',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 18,
                    song_name: 'This Must Be the Place',
                    artist: 'Talking Heads',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 19,
                    song_name: 'Daydreaming',
                    artist: 'Radiohead',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 20,
                    song_name: 'Instant Need',
                    artist: 'FKJ',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 21,
                    song_name: 'Mr. Brown',
                    artist: 'Bob Marley',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 22,
                    song_name: 'Letter from Yokosuka',
                    artist: 'Nujabes',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 23,
                    song_name: 'Blow my High',
                    artist: 'Kendrick Lamar',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 24,
                    song_name: 'Someday',
                    artist: 'The Strokes',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 25,
                    song_name: 'Star of the Show',
                    artist: 'Wiz Khalifa',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 26,
                    song_name: 'Lose It',
                    artist: 'Austra',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 27,
                    song_name: 'Wild Horses',
                    artist: 'Bishop Briggs',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 28,
                    song_name: 'When Im Small',
                    artist: 'Phantogram',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 29,
                    song_name: 'Drive',
                    artist: 'Warpaint',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 30,
                    song_name: 'The Shade',
                    artist: 'Metric',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 31,
                    song_name: 'Coffee',
                    artist: 'Sylvan Esso',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 32,
                    song_name: 'Return to Air',
                    artist: 'Bonobo - Flashlight EP',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 33,
                    song_name: 'Wolf - Skott',
                    artist: 'Porcelain',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 34,
                    song_name: 'Horizon',
                    artist: 'Tyco',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 35,
                    song_name: 'Rennen',
                    artist: 'SOHN',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 36,
                    song_name: 'Tame Impala',
                    artist: 'The Less I Know the Better',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 37,
                    song_name: 'Mac Dre',
                    artist: ' Since 84',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 38,
                    song_name: 'Lonely Island',
                    artist: 'Im on A Boat',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 39,
                    song_name: 'Under The Bridge',
                    artist: 'Red Hot Chili Peppers',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 40,
                    song_name: 'Take On Me',
                    artist: 'Aha',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 41,
                    song_name: 'Santeria',
                    artist: 'Sublime',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 42,
                    song_name: 'Ice Ice Baby ',
                    artist: 'Vanilla Ice',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 43,
                    song_name: 'Ms. Jackson',
                    artist: 'Outkast',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 44,
                    song_name: 'Slayer',
                    artist: 'Reign In Blood',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 45,
                    song_name: 'Cannibal Corpse',
                    artist: 'Hammer Smashed Face',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 46,
                    song_name: 'Whitesnake',
                    artist: 'Still Of The Night',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 47,
                    song_name: 'Pantera',
                    artist: 'Far Beyond Driven',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 48,
                    song_name: 'Sepultura',
                    artist: 'Beneath The Remains',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 49,
                    song_name: 'Sixteen Saltines',
                    artist: 'Jack White',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 50,
                    song_name: 'Classic',
                    artist: 'The Knocks',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 51,
                    song_name: 'Innerbloom',
                    artist: 'Rufus Du Sol',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 52,
                    song_name: 'Toxic Love Affair',
                    artist: 'Kraak & Smaak',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 53,
                    song_name: 'Hey Ma',
                    artist: 'Camron',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 54,
                    song_name: 'Run the World',
                    artist: 'Beyonce',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 55,
                    song_name: 'Vaccaciones',
                    artist: 'Wisin',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 56,
                    song_name: 'Deja que te Bese ',
                    artist: 'Alejandro Sanz',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 57,
                    song_name: 'Quiet Nights Of Quiet Stars',
                    artist: 'Corcodavo',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 58,
                    song_name: 'Hall of Fame',
                    artist: 'The Script',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 59,
                    song_name: 'In a Sentimental Mood',
                    artist: 'Duke Ellington',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 60,
                    song_name: 'Sicut Cervus',
                    artist: 'The Schola Cantorum of St. John XXIII Parish',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 61,
                    song_name: 'Barcelona',
                    artist: 'George Ezra',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 62,
                    song_name: 'Pulaski at Night',
                    artist: 'Andrew Bird',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 63,
                    song_name: 'Le nozze di Figaro Overture',
                    artist: 'Weiner Philharmonic',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 64,
                    song_name: 'Last Dance',
                    artist: 'Rhye',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 65,
                    song_name: 'Gangnum-Style',
                    artist: 'PSY',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 66,
                    song_name: 'Wonderwall',
                    artist: 'Oasis',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 67,
                    song_name: 'Beautiful Day',
                    artist: 'U2',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 68,
                    song_name: 'เพื่อนรัก',
                    artist: 'Parkinson',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ])

            .then((info) => {
                return knex.raw("SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs))");
            });
        });
};
