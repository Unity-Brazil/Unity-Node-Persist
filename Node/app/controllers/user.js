var db = require('../models/')
  , _  = require('lodash');

module.exports = {

    /*
     * List all users
     */
    list : function(request, response) {
        db.user.findAll().then(function(users){
            response.status(200).json({ result : users });
        });
    }

    /*
     * Create new user
     */
    , create : function(request, response) {
        db.user.create(request.body).then(function(user){
            response.status(200).json({ result : user });
        }).catch(function(err){
            response.status(400).json({ error : err });
        });
    }

    /*
     * Show a single user
     */
    , read : function(request, response) {
        response.json({ result : request.user });
    }

    /*
     * Update an user
     */
    , update : function(request, response) {
        var user = request.user;
        user = _.extend(user, request.body);

        user.save().then(function(user){
            response.status(200).json({ result : user });
        }).catch(function(err){
            response.status(400).json({ error : err });
        });
    }

    /*
     * Delete an user
     */
    , delete : function(request, response) {
        var user = request.user;
        user.destroy().then(function() {
            response.status(200).json({ result : 'deleted' });
        }).catch(function(err){
            response.status(400).json({ error: err });
        });
    }

    /*
     * Middleware for userId parameter
     */
    , userByEmail : function(request, response, next, email){
        db.user.find({ where : { email : email }}).then(function(user){
            if(!user) response.status(404).json({ error : "User not found" });
            request.user = user;
            next();
        }).catch(function(err){
            next(err);
        });
    }
};
