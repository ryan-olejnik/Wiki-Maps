exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('maps').truncate()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('maps').insert({
        id: 1,  
        title: 'Vegan TO',
        description: 'Best vegan food in Toronto!!',
        image: 'image_link',
        created_by_user_id: 2,
        created_date: '2016-03-11',
        is_private: false,
        gps_lat: '43.652120',
        gps_lng: '-79.402601'
        }),

        knex('maps').insert({
        id: 2,
        title: 'Bars TO',
        description: 'Best bars in Toronto!!',
        image: 'image_link',
        created_by_user_id: 1,
        created_date: '2016-01-01',
        is_private: false,
        gps_lat: '43.652608',
        gps_lng: '-79.392621'
        })
      ]);
    });
};
