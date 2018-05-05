exports.up = function(knex, Promise) {
  return knex.schema.table('maps', function(table){
      table.string('gps_lat');
      table.string('gps_lng');
    });

};

exports.down = function(knex, Promise) {
  return knex.schema.table('maps', function(table){
      table.dropColumn('gps_lat');
      table.dropColumn('gps_lng');
    });
};
