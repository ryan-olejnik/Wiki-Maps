exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('maps').truncate()
    .then(() => {
      return Promise.all([
        knex('maps').insert({ 
          title: 'Vegan TO',
          description: 'Best vegan food in Toronto!!',
          image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/noodles.jpg?itok=Oalsb6ro',
          created_by_user_id: 2,
          created_by_username: 'justini46',
          created_date: '2016-03-11',
          is_private: false,
          })

        // ,
        // knex('maps').insert({
        //   title: 'Bars TO',
        //   description: 'Best bars in Toronto!!',
        //   image: 'image_link',
        //   created_by_user_id: 1,
        //   created_date: '2016-01-01',
        //   is_private: false
        // })
    ]);
  });    
};
