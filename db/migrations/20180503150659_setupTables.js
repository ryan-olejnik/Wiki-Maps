exports.up = function(knex, Promise) {
  return 
  Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username');
      table.string('email');
      table.string('phone_number');
      table.string('first_name');
      table.string('last_name');
      table.date('birthdate');
    }),








  ])

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
