exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          username: 'ry_guy',
          password: 'password',
          email: 'ryan.olejnik@gmail.com',
          phone_number: '333-555-4444',
          first_name: 'Ryan',
          last_name: 'Olejnik',
          birthdate: '1992-04-28'
        }),
        knex('users').insert({
          username: 'justine_true-doe',
          password: 'password',
          email: 'jlum@gmail.com',
          phone_number: '416-666-6666',
          first_name: 'Justin',
          last_name: 'Lum',
          birthdate: '1942-02-21'
        }),
        knex('users').insert({
          username: 'cem_boii',
          password: 'password',
          email: 'cem@gmail.com',
          phone_number: '416-666-4434',
          first_name: 'Cem',
          last_name: 'Hekimoglu',
          birthdate: '1993-06-03'
        }),

      ]);
    });
};


