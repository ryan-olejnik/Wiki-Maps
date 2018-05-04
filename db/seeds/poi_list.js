
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('poi_list').truncate()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('poi_list').insert({
          map_id: 1,
          title: 'Greens Vegetarian Resturante',
          description: 'Kale salad for everyone!',
          image: '<image_link>',
          created_by_user_id: 1,
          created_date: '2018-01-01',
          latitude: '43.652187',
          longitude: '-79.402506',
          place_id: 'google_place_id',
          address: '638 Dundas St W, Toronto, ON M5T 1H8'
        }),
        knex('poi_list').insert({
          map_id: 1,
          title: 'Cosmic Treats',
          description: 'Healthy selection of MURDER_FREE dishes',
          image: '<image_link>',
          created_by_user_id: 2,
          created_date: '2017-11-11',
          latitude: '43.654037',
          longitude: '-79.401611',
          place_id: 'google_place_id',
          address: '207 Augusta Ave, Toronto, ON M5T 2L4'
        })
      ]);
    });
};
