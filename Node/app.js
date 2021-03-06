'use strict';

var express = require('express')
  , config  = require('./config/config')
  , db      = require('./app/models');

var app = express();

require('./config/express')(app);

db.sequelize
  /* .sync({ force : true}) */
  .sync()
  .then(function() {
        app.listen(process.env.PORT || 3000);
});

exports = module.exports = app;
