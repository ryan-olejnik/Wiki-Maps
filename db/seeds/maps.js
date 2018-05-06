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
    });

};
