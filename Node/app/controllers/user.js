var db = require('../models/')
  , _  = require('lodash');

module.exports = {

    /*
     * List all users
     */
    list : function(request, response) {
        db.user.findAll().then(function(users){
            return response.status(200).json(users);
        });
    }

    /*
     * Create new user
     */
    , create : function(request, response) {
        db.user.create(request.body).then(function(user){
            response.status(200).json(user);
        }).catch(function(err){
            response.status(400).json(err);
        });
    }

    /*
     * Show a single user
     */
    , read : function(request, response) {
        response.json(request.user);
    }

    /*
     * Update an user
     */
    , update : function(request, response) {
        var user = request.user;
        user = _.extend(user, request.body);

        user.save().then(function(user){
            response.status(200).json(user);
        }).catch(function(err){
            response.status(400).json(err);
        });
    }

    /*
     * Delete an user
     */
    , delete : function(request, response) {
        var user = request.user;
        user.destroy().then(function() {
            response.status(200).send('deleted');
        }).catch(function(err){
            response.status(400).json(err);
        });
    }

    /*
     * Middleware for userId parameter
     */
    , userById : function(request, response, next, id){
        db.user.find({ where : { id : id }}).then(function(user){
            if(!user) response.status(404).send("User not found");
            request.user = user;
            next();
        }).catch(function(err){
            next(err);
        });
    }
};
