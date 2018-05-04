"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post('/login', (req, res) => {
  knex.select('*').from('users')
  .where('email', '=', req.body.email)
  .then((result) => {
    console.log(result[0].username, ' is a member');
    console.log(result[0].password);
    if (req.body.password === result[0].password){
      res.send('SUCCESSFUL LOGIN!\nWelcome');
    } else{
      throw new Error('User authenticaiton failed');
    }
  })
  .catch((error) => {
    res.send('Unsuccessful Login :(...');
  });
});

app.post('/create', (req, res) => {
  // console.log(req.body);
  knex('maps').insert({
    title: req.body.title,
    description: req.body.description,
    image: String(req.body.image),
    created_by_user_id: req.body.created_by_user_id  // READ COOKIES TO FIND OUT WHO IS LOGGED IN!!
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







app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
