
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('permissions').truncate()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('permissions').insert({
          user_id: 1,
          map_id: 1
        }),

        knex('permissions').insert({
          user_id: 2,
          map_id: 1
        })
      ]);
    });
};
