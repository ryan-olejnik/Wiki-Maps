exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('maps').truncate()

    .then(() => {
      return knex('maps').insert({
          title: 'Vegan TO',
          description: 'Best vegan food in Toronto!!',
          image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/noodles.jpg?itok=Oalsb6ro',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2016-03-11',
          is_private: false,
          });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Parks Toronto',
          description: 'Best parks in Toronto!!!',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Green_Park%2C_London_-_April_2007.jpg/1200px-Green_Park%2C_London_-_April_2007.jpg',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Tourist Destinations',
          description: 'Must-see places!!!',
          image: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.hgtvcom.1280.960.suffix/1491581548990.jpeg',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Wonders of the World',
          description: '7 Wonders of the world',
          image: 'https://www.monstersandcritics.com/lists/wp-content/uploads/2015/03/Seven-Wonders-of-the-World-Taj-Mahal-1024x630.png',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2016-01-01',
          is_private: false
        });
    })


    //kjdnaksdjnaskjdnakjsdnakjsndkajsndkajsndkajsndkjasndkjandskjn
    .then(() => {
      return knex('maps').insert({
          title: 'Cinema’s in TO',
          description: 'Best big screens and seats',
          image: 'https://images.unsplash.com/photo-1465066989788-372fcdde2f2c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2640dbc2e5d75ac77e6931d11a7a6061&auto=format&fit=crop&w=1500&q=80',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Hostel’s in Cambodia',
          description: 'Cheap, fun, safe places to stay when you travel abroad.',
          image: 'https://images.unsplash.com/photo-1490213739287-16ad3f975ebb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab74f77d45e674439751be9ccf4821d8&auto=format&fit=crop&w=1500&q=80',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Free Activities to do in TO ',
          description: 'Don’t spend a dime, just enjoy what is available to you for free.',
          image: 'https://images.unsplash.com/photo-1443745029291-d5c27bc0b562?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d636dad969ffd90efa699e2e94f1e57&auto=format&fit=crop&w=1500&q=80',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Cocktails Toronto',
          description: 'Best cocktail bars in Toronto',
          image: 'https://images.unsplash.com/photo-1509669803555-fd5edd8d5a41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=453ba52ad7b512705656a61f78bd11ad&auto=format&fit=crop&w=1500&q=80',
          created_by_user_id: 4,
          created_by_username: 'donald_trump',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'Toronto Concert Venues',
          description: 'Best venues to enjoy listening your favourite bands.',
          image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5ecaef0464fc50a866e74a6176c3fdc&auto=format&fit=crop&w=1500&q=80',
          created_by_user_id: 1,
          created_by_username: 'ry-guy',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'TO Gym’s',
          description: 'Best places to workout in the city',
          image: 'https://images.unsplash.com/photo-1493690283958-32df2c86326e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2aa75d3b3d10dfa738eb6dc39add3678&auto=format&fit=crop&w=1496&q=80',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2016-01-01',
          is_private: false
        });
    })
    .then(() => {
      return knex('maps').insert({
          title: 'BJJ/MMA Schools',
          description: 'Learn how to defend yourself by joining one of these schools.',
          image: 'https://images.unsplash.com/photo-1509255929945-586a420363cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1837886ce541e402e3945f937c3afe08&auto=format&fit=crop&w=1202&q=80',
          created_by_user_id: 3,
          created_by_username: 'cem-boii',
          created_date: '2016-01-01',
          is_private: false
        });
    })

};
