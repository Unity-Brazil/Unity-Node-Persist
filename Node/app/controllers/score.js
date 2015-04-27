var db   = require('../models/')
  , user = require('./user')
  , _    = require('lodash');

module.exports = {


    /*
     * List all scores
     */
    list : function(request, response) {
        db.score.findAll({ include : db.user }).then(function(scores){
            response.status(200).json({ result: scores });
        });
    }

    /*
     * Create a score
     */
    , create : function(request, response) {
        user.userByEmail(request, response).then(function(user){
            request.body.user_score = user.id;
            return db.score.create(request.body)
        }).then(function(score){
            response.json(scores);
        }).catch(function(err){
            response.status(400).json(err);
        });
    }

    /*
     * Read score
     */
    , read : function(request, response) {
        response.json(request.score);
    }

    /*
     * Update a score
     */
    , update : function(request, response) {
        var score = request.score;
        score = _.extend(score, request.body);

        score.save().then(function(score){
            response.status(200).json(score);
        }).catch(function(err){
            response.status(400).json(err);
        });
    }

    /*
     * Delete a score
     */
    , delete : function(request, response) {
        var score = request.score;
        score.destroy().then(function() {
            response.status(200).json({ result : 'deleted' });
        }).catch(function(err){
            response.status(400).json(err);
        });
    }

    /*
     * Middleware for scoreId parameter
     */
    , scoreById : function(request, response, next, id){
        db.score.find({ where : { id : id }}).then(function(score){
            if(!user) response.status(404).json({ result : "Score not found" });
            request.score = score;
            next();
        }).catch(function(err){
            next(err);
        });
    }
};