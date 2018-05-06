exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert({
        username: 'ry_guy',
        password: 'password',
        email: 'ryan.olejnik@gmail.com',
        phone_number: '333-555-4444',
        first_name: 'Ryan',
        last_name: 'Olejnik',
        birthdate: '1992-04-28'
      });
    })
    .then(() => {
      return knex('users').insert({
        username: 'justini46',
        password: 'password',
        email: 'jlum@gmail.com',
        phone_number: '416-666-6666',
        first_name: 'Justin',
        last_name: 'Lum',
        birthdate: '1942-02-21'
      });
    })
    .then(() => {
      return knex('users').insert({
        username: 'cem_boii',
        password: 'password',
        email: 'cem@gmail.com',
        phone_number: '416-666-4434',
        first_name: 'Cem',
        last_name: 'Hekimoglu',
        birthdate: '1993-06-03'
      });
    })
    .then(() => {
      return knex('users').insert({
        username: 'donald_trump',
        password: 'password',
        email: 'trump@gmail.com',
        phone_number: '416-666-4434',
        first_name: 'Donald',
        last_name: 'Trump',
        birthdate: '1893-06-03'
      });
    });

};


