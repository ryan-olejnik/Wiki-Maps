"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.render('index.ejs');
  });

  router.post('/login', (req, res) => {
    knex.select('*').from('users')
    .where('email', '=', req.body.email)
    .then((result) => {
      console.log(result[0].username, ' is a member');
      console.log(result[0].password);
      if (req.body.password === result[0].password){
        res.send('SUCCESSFUL LOGIN!\nWelcome');
        // SEND A COOKIE with login info------------------------------------------ !!!
      } else{
        throw new Error('User authenticaiton failed');
      }
    })
    .catch((error) => {
      res.send('Unsuccessful Login :(...');
    });
});

  router.post('/create', (req, res) => {
    // console.log(req.body);
    knex('maps').insert({
      title: req.body.title,
      description: req.body.description,
      image: String(req.body.image),
      created_by_user_id: req.body.created_by_user_id  // <--- READ COOKIES TO FIND OUT WHO IS LOGGED IN!!!!!!!
    })
    .then(() => {
      knex.destroy();
      res.send('New map added!');
    })
    .catch((error) => {
      res.send('Unable to create map :(...');
      console.error('MAP WAS NOT CREATED BECASUE:\n', error);
    });
  });

  router.get('/api/users', (req, res) => {
    res.send('Got /api/users request');

  });





  return router;
};
