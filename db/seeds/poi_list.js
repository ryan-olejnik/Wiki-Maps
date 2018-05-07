
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
        }),


////////////////////////////////////////////////////////////////////////////////////

// CINEMAS

        knex('poi_list').insert({
          map_id: 5,
          title: 'TIFF Bell Lightbox',
          description: 'International film festival',
          image: 'http://www.signmedia.ca/wp-content/uploads/2014/02/GDQ4300.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.6465295',
          longitude: '-79.39040820000002',
          place_id: 'ChIJewSvlNA0K4gRlkERDVrMZ08',
          address: 'TIFF Bell Lightbox, King Street West, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 5,
          title: 'The Royal',
          description: 'Historic cinema for indies',
          image: 'http://www.postcity.com/Eat-Shop-Do/Do/October-2014/Weekly-Toronto-Flick-Picks-Talkin-Buffer-Fest-Reel-Indie-at-The-Royal-and-more/flickpicks9.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.65520770000001',
          longitude: '-79.4144814',
          place_id: 'ChIJt6xW1_E0K4gRy1QoqXwJhHE',
          address: 'The Royal, College Street, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 5,
          title: 'Scotiabank Theatre Toronto',
          description: 'Large multiplex with a licensed lounge',
          image: 'https://media-cdn.tripadvisor.com/media/photo-o/05/a1/74/92/scotiabank-theatre.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.6489106',
          longitude: '-79.39123469999998',
          place_id: 'ChIJ6WXdCtA0K4gR5wmJfTBGe48',
          address: 'Scotiabank Theatre, Richmond Street West, Toronto, ON, Canada'
        }),

// HOSTEL'S IN COMBODIA

        knex('poi_list').insert({
          map_id: 6,
          title: 'Siem Reap',
          description: 'Fun lodging environment',
          image: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/ece4a0143363eb7f739b25032638804f-siem-reap.jpg?sharp=10&vib=20&w=1200',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2018-01-01',
          latitude: '13.3550091',
          longitude: '103.85517299999992',
          place_id: 'ChIJeaiRjJoWEDER-rvlPvmqQKk',
          address: 'Siem Reap, Cambodia'
        }),

        knex('poi_list').insert({
          map_id: 6,
          title: 'Sla Boutique Hostel',
          description: 'Relaxed lodging serving free breakfast',
          image: 'https://pix10.agoda.net/hotelImages/705/705393/705393_14122013590024088393.jpg?s=1024x768',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2018-01-01',
          latitude: '11.5654507',
          longitude: '104.92456059999995',
          place_id: 'ChIJfSXnhkdRCTERAQJh372OrCI',
          address: 'Sla Boutique Hostel, Oknha Ket St. (174), Phnom Penh, Cambodia'
        }),

// Free Activities to do in TO

        knex('poi_list').insert({
          map_id: 7,
          title: 'Art Gallery of Toronto',
          description: 'Visit the Art Gallery of Ontario and take a look at their permanent collection of artwork.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Art_Gallery_of_Ontario_entrance.jpg',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2018-01-01',
          latitude: '43.6536066',
          longitude: '-79.39251230000002',
          place_id: 'ChIJvRlT7cU0K4gRr0bg7VV3J9o',
          address: 'Art Gallery of Ontario, Dundas Street West, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 7,
          title: 'Harbourfront Centre Natrel Rink',
          description: 'Public skating rink',
          image: 'http://www.harbourfrontcentre.com/images/venues/2017/Natrel-Rink_4.jpg',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2018-01-01',
          latitude: '43.6381564',
          longitude: '-79.38265999999999',
          place_id: 'ChIJ-3BO8So1K4gRQLqEsRI0pz8',
          address: 'Harbourfront Centre Natrel Rink, Queens Quay West, Toronto, ON, Canada'
        }),

        //Cocktails Toronto

        knex('poi_list').insert({
          map_id: 8,
          title: 'The Cloak Bar',
          description: 'Great cocktails cozy environment',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/a3/fc/6e/it-really-is-one-of-the.jpg',
          created_by_user_id: 4,
          created_by_username: 'donald_trump',
          created_date: '2018-01-01',
          latitude: '43.6435857',
          longitude: '-79.39854889999998',
          place_id: 'ChIJ7xo6It80K4gRAuowskwRqW0',
          address: 'The Cloak Bar, Wellington Street West, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 8,
          title: 'BarChef',
          description: 'Everything looks fantastic and tastes amazing',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/53/c2/fb/barchef.jpg',
          created_by_user_id: 4,
          created_by_username: 'donald_trump',
          created_date: '2018-01-01',
          latitude: '43.6481949',
          longitude: '-79.40018199999997',
          place_id: 'ChIJp77rrN00K4gRKdj2mzu8IBI',
          address: 'BarChef, Queen St W, Toronto, ON, Canada'
        }),

        //Toronto Concert Venues

        knex('poi_list').insert({
          map_id: 9,
          title: 'Budweiser Stage',
          description: 'Fun midsize concert venue, good for the summer',
          image: 'https://www.thestar.com/content/dam/thestar/news/queenspark/2017/01/10/how-big-brewers-call-the-shots-at-ontario-place-cohn/molson0011.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.6292459',
          longitude: '-79.4152393',
          place_id: 'ChIJa7dwhhA1K4gRUV9cPcYC64g',
          address: 'Budweiser Stage, Lake Shore Boulevard West, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 9,
          title: 'RBC Echo Beach',
          description: 'Jam along to your favorite bands on the beach',
          image: 'http://www.thatericalper.com/wp-content/uploads/2017/05/Walk-Off-The-Earth-CBC-Music-Festival-Minis-Memories-DSC_1771.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2018-01-01',
          latitude: '43.6294497',
          longitude: '-79.41136840000001',
          place_id: 'ChIJ_78-EQ41K4gRc6iqXpx4qoU',
          address: 'RBC Echo Beach, Lake Shore Boulevard West, Toronto, ON, Canada'
        }),

        //GYM'S

        knex('poi_list').insert({
          map_id: 10,
          title: 'YMCA',
          description: 'Cheap and widely available',
          image: 'http://rethinktires.ca/wp-content/uploads/gta1.png',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2018-01-01',
          latitude: '43.6534225',
          longitude: '-79.42593',
          place_id: 'ChIJC6ihHFg0K4gRXdhNclqiv7k',
          address: 'YMCA Gym, College Street, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 10,
          title: 'Hone Fitness',
          description: '10$ a month, always clean!',
          image: 'http://greenrockpm.ca/blog/wp-content/uploads/pasted-image-0-5.png',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2018-01-01',
          latitude: '43.66755750000001',
          longitude: '-79.38514830000003',
          place_id: 'ChIJod2oELI0K4gRRTWB3baoqwg',
          address: 'Hone Fitness, Isabella Street, Toronto, ON, Canada'
        }),

        //MMA/BJJ

        knex('poi_list').insert({
          map_id: 11,
          title: 'Toronto BJJ',
          description: 'Big and clean mats, friendly environment',
          image: 'http://www.graciemag.com/wp-content/uploads/2014/01/Picture-15.png',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2018-01-01',
          latitude: '43.6625624',
          longitude: '-79.42176610000001',
          place_id: 'ChIJ7977MYs0K4gRcBGzy4301ec',
          address: 'Toronto BJJ, Bloor Street West, Toronto, ON, Canada'
        }),

        knex('poi_list').insert({
          map_id: 11,
          title: '6IX MMA',
          description: 'Clean gym, great technical coaching and fantastic atmosphere.',
          image: 'https://static1.squarespace.com/static/533c9bdbe4b01b8f6b73f284/56453a99e4b0177ad4138b34/5a48831441920273ab75e33f/1485137133880/14305484_10155285210674899_5102958139507595537_o.jpg?format=500w',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2018-01-01',
          latitude: '43.6471792',
          longitude: '-79.40490069999998',
          place_id: 'ChIJVYynN5I0K4gRn8NoXMjvIPM',
          address: '6IX MMA, Toronto, ON, Canada'
        })

      ]);
    });
};
