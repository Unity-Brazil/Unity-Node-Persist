var express      = require('express')
  , bodyParser   = require('body-parser')
  , cookieParser = require('cookie-parser')
  , method       = require("method-override")
  , logger       = require('morgan')
  , glob         = require('glob');

module.exports = function(app) {

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(method());
    app.use(cookieParser());

    var routes = glob.sync(root+'/app/routes/*.js');
    routes.forEach(function(route) {
        require(route)(app);
    });

    app.use(function(err, request, response, next) {

        if(!err)
            next();

        console.log(err.stack);
        response.status(500).send(err.stack);
    });

    app.use(function(request, response) {
        response.status(404).json({ error : "Route has not found" });
    });
};
