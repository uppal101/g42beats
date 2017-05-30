
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                {
                    id: 1,
                    user_name: 'AlexKrawiec',
                    hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                  id: 2,
                  user_name: 'SashaBerkowitz',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 3,
                  user_name: 'MichaelMartinez',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 4,
                  user_name: 'SanjeetUppal',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 5,
                  user_name: 'KevinLam',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 6,
                  user_name: 'MartyYee',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 7,
                  user_name: 'MaryLai',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 8,
                  user_name: 'MattMuhr',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 9,
                  user_name: 'DanielGardner',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 10,
                  user_name: 'RyanThissen',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 11,
                  user_name: 'ThomasStang',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 12,
                  user_name: 'IvonneTerrero',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 13,
                  user_name: 'ReidDelahunt',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                },
                {
                  id: 14,
                  user_name: 'AomSithanant',
                  hashed_password:'$2a$12$nPITELk5hJbSf3Ec2ijKseG83BOoh4qUEWujlaTS2sO56iLKf4cfy',//g42beats
                  created_at: new Date(),
                  updated_at: new Date()
                }
            ])
            .then(() => {
                return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
            });
        });
