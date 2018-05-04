"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.render('index.ejs');
  });

  router.get('/maps/:mapid', (req, res) => {
    let map_info = {};
    // lookup the map in the database, and send the map data, and all associated POIs
    knex.select('*').from('maps')
    .where('id', '=', Number(req.params.mapid))
    .then((results) => {
      // console.log(req.params.mapid);
      if (results.length === 0){
        throw new Error('No maps with id' + req.params.mapid);
      } else{
        map_info['map'] = results[0];
        knex.select('*').from('poi_list')
        .where('map_id', '=', map_info.map.id)
        .then((results) => {
          map_info['poi_list'] = results;
          console.log(map_info);
          res.send(map_info);
        });
      }


    })
    .catch((error) => {
      res.send('There was an error: ' + error);
    });





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


  // This request comes from app.js
  router.get('/api/users', (req, res) => {
    res.send('Got /api/users request');

  });





  return router;
};
