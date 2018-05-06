exports.up = function(knex, Promise) {
  return new Promise( (resolve, reject) => {
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.string('email');
      table.string('phone_number');
      table.string('first_name');
      table.string('last_name');
      table.date('birthdate');
    })
    .then(() => {
      return knex.schema.createTable('maps', function (table) {
        table.increments('id').primary();
        table.string('title');
        table.string('description');
        table.string('image');
        table.integer('created_by_user_id');
        table.string('created_by_username');
        table.date('created_date').defaultTo(knex.fn.now());
        table.boolean('is_private');
      });
    })
    .then(() => {
      return knex.schema.createTable('favourites', function(table){
        table.increments('id').primary();
        table.integer('user_id');
        table.integer('map_id');
      });
    })
    .then( () => {
      return knex.schema.createTable('permissions', function(table){
        table.increments('id').primary();
        table.integer('user_id');
        table.integer('map_id');
      });
    })
    .then( () => {
      return knex.schema.createTable('poi_list', function(table){
        table.increments('id').primary();
        table.integer('map_id');
        table.string('title');
        table.string('description');
        table.string('image');
        table.integer('created_by_user_id');
        table.string('created_by_username');
        table.date('created_date').defaultTo(knex.fn.now());
        table.string('latitude');
        table.string('longitude');
        table.string('place_id');
        table.string('address');
      });
    })
    .then( () => {
      resolve();
    })
    .catch( (error) => {
      reject(error);
    });


  });
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('poi_list'),
    knex.schema.dropTable('permissions'),
    knex.schema.dropTable('favourites'),
    knex.schema.dropTable('maps'),
    knex.schema.dropTable('users')
    ]);
};
