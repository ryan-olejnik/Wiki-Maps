exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('maps').insert({
        title: 'Vegan TO',
        description: 'Best vegan food in Toronto!!',
        image: 'image_link',
        created_by_user_id: 2,
        created_date: '2016-03-11',
        is_private: false
        }),

        knex('maps').insert({
        title: 'Bars TO',
        description: 'Best bars in Toronto!!',
        image: 'image_link',
        created_by_user_id: 1,
        created_date: '2016-01-01',
        is_private: false
        })
      ]);
    });
};
