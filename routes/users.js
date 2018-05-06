"use strict";

const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');


module.exports = (knex) => {

  router.get("/", (req, res) => {
    console.log('cookie: ' + req.session.username);
    let templateVars = {username: req.session.username};
    res.render('index.ejs', templateVars);
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
          // Assigning knex results into map_info and passing it into render
          map_info['poi_list'] = results;
          console.log(map_info);
          res.render('view-map', map_info);
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
        req.session.username = result[0].username;
        res.redirect('/');
      } else{
        throw new Error('User authenticaiton failed');
      }
    })
    .catch((error) => {
      res.send('Unsuccessful Login :(...');
    });
  });

  router.post('/logout', (req, res) => {
    req.session.username = null;
    let templateVars = {username: req.session.username};
    res.render('index.ejs', templateVars);
  });


  router.post('/newmap', (req, res) => {
    // console.log(req.body);
    // console.log(req.session.username + ' is creating a map');

    knex('maps').returning('id')
    .insert({
        title: req.body.title,
        description: req.body.description,
        image: String(req.body.image),
        created_by_user_id: 1,  //        HARD CODED... THIS NUMBER DOESNT DO ANYTHING...
        created_by_username: req.session.username
      })
      .then((result) => {
        // console.log('returning... ' + result)
        let templateVars = {username: req.session.username, mapID: result[0], mapTitle: req.body.title};
        console.log(templateVars);
        res.render('add-poi.ejs', templateVars);
      })
      .catch((error) => {
        res.send('Unable to create map :(...');
        console.error('MAP WAS NOT CREATED BECASUE:\n', error);
      });
  });

  router.post('/maps/:mapid/newpoi', (req, res) => {
    console.log(req.body);
    knex('poi_list')
    .insert({
      map_id: req.params.mapid,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      created_by_user_id: 1,
      created_by_username: req.session.username,
      latitude: req.body['gps-lat'],
      longitude: req.body['gps-lng'],
      place_id: req.body.placeid,
      address: 'address???'
    })
    .then(() => {
      res.send('Got your new poi! Fank yew fank yew');
    })
    .catch((error) => {
      console.log('Error inputting poi into database: ' + error);
      res.send('Unable to create poi :(...')
    });

  });


  router.get('/newmap', (req, res) => {
    let templateVars = {username: req.session.username};
    res.render('add_new_map.ejs', templateVars);
  });

  router.get('/newpoi', (req, res) => {
    let templateVars = {username: req.session.username};
    res.render('add-poi.ejs', templateVars);
  });

  return router;
};
