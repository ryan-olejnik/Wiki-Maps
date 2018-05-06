
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
          image: 'https://s3.amazonaws.com/btoimage/prism-thumbnails/listings/45ee-2011313-greens-vegetarian.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.652187',
          longitude: '-79.402506',
          place_id: 'google_place_id',
          address: '638 Dundas St W, Toronto, ON M5T 1H8'
        }),
        knex('poi_list').insert({
          map_id: 1,
          title: 'Cosmic Treats',
          description: 'Healthy selection of MURDER FREE dishes',
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/1ccBtdsknEzc-Er2Hxi2zw/ls.jpg',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2017-11-11',
          latitude: '43.654037',
          longitude: '-79.401611',
          place_id: 'google_place_id',
          address: '207 Augusta Ave, Toronto, ON M5T 2L4'
        })
      ]);
    });
};
