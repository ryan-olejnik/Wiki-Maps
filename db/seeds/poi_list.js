
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
        }),

        knex('poi_list').insert({
          map_id: 2,
          title: 'High Park',
          description: 'Huse park in the west end!',
          image: 'https://www.blogto.com/upload/2016/05/2016520-high-park-couple.jpg',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2017-11-11',
          latitude: '43.64654789999999',
          longitude: '-79.4636903',
          place_id: 'ChIJBfc2I9M1K4gRZ-4AoyXIvAE',
          address: '1873 Bloor St W, Toronto, ON M6R 2Z3, Canada'
        }),

        knex('poi_list').insert({
          map_id: 2,
          title: 'Tommy Thompson Park',
          description: 'Great place to visit on the summer!',
          image: 'http://greatruns.com/wp-content/uploads/2016/06/1-9tkGZWNSa3mJ4pnnXBnmXA.jpeg',
          created_by_user_id: 4,
          created_by_username: 'donald_trump',
          created_date: '2018-11-11',
          latitude: '43.6313695',
          longitude: '-79.32637439999996',
          place_id: 'ChIJlQx0rVXK1IkRW1YiBCI5e74',
          address: '1 Leslie St, Toronto, ON M4M 3M2, Canada'
        }),

        knex('poi_list').insert({
          map_id: 2,
          title: 'Christie Pits Park',
          description: 'Fun fun fun!',
          image: 'https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/32a1-2012717-cp-baseball.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.6645888',
          longitude: '-79.42068089999998',
          place_id: 'ChIJ8f_In4s0K4gRRK-KutieqXA',
          address: '750 Bloor St W, Toronto, ON M6G 3K4, Canada'
        }),

        knex('poi_list').insert({
          map_id: 3,
          title: 'Bankok',
          description: 'Best city in S.E.A.!!',
          image: 'https://dglw4xbnd0ycq.cloudfront.net/w1600-h1200-cfill/trips/qxYU1-grand-palace-bangkok.jpg',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2018-01-01',
          latitude: '13.7563309',
          longitude: '100.50176510000006',
          place_id: 'ChIJ82ENKDJgHTERIEjiXbIAAQE',
          address: 'Bankok, Thailand'
        }),

        knex('poi_list').insert({
          map_id: 3,
          title: 'St. Lucia',
          description: 'Best island in the Carribean',
          image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res60/244000/244197-St-Lucia.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '13.909444',
          longitude: '-60.97889299999997',
          place_id: 'ChIJHaMt8WVgQIwR9Z056MSGdG4',
          address: 'St. Lucia'
        }),

        knex('poi_list').insert({
          map_id: 4,
          title: 'Taj Mahal',
          description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '27.1750151',
          longitude: '78.04215520000002',
          place_id: 'ChIJbf8C1yFxdDkR3n12P4DkKt0',
          address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India'
        }),

        knex('poi_list').insert({
          map_id: 4,
          title: 'Pyramids of Giza',
          description: 'The oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
          image: 'https://www.planetware.com/photos-large/EGY/egypt-pyramids-of-giza-great-pyramid-with-tomb-of-senegemib-inti-in-front.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '29.9792345',
          longitude: '31.134201899999994',
          place_id: 'ChIJGymPrIdFWBQRJCSloj8vDIE',
          address: 'Al Haram, Nazlet El-Semman, Al Haram, Giza Governorate, Egypt'
        }),

        knex('poi_list').insert({
          map_id: 4,
          title: 'Machu Picchu',
          description: '',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/5c/5c/8a/a-voir-absolument.jpg',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2018-01-01',
          latitude: '-13.1631412',
          longitude: '-72.54496289999997',
          place_id: 'ChIJVVVViV-abZERJxqgpA43EDo',
          address: 'Montana Machu Picchu, Peru'
        }),

        knex('poi_list').insert({
          map_id: 4,
          title: 'Great Wall of China',
          description: 'A series of fortifications made of stone, brick and tamped earth built along an east-to-west line across the historical northern borders of China',
          image: 'https://www.tipntrips.com/wp-content/uploads/2017/12/The-Great-Wall-of-China.jpg',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2018-01-01',
          latitude: '40.4319077',
          longitude: '116.57037489999993',
          place_id: 'ChIJzyx_aNch8TUR3yIFlZslQNA',
          address: 'Huairou, China'
        })





















      ]);
    });
};
