'use strict';

var request = require('supertest')
  , should  = require('should')
  , app     = require('../app')
  , users   = require('../app/controllers/user')
  , user    = {}
  , score   = {}

describe('Users API tests', function() {

    before(function() {
        user = { username : "TestUserName", email : "test@gmail.com" }
    })

    it('Get All Users', function(done) {
        request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })

    it('Create an User', function(done) {
        request(app)
        .post('/users')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, response) {
            if (err) done(err);
            user.id = response.body.id;
            done();
        })
    })

})

describe('Score API tests', function() {

    before(function() {
        score = { value : 90.0, email : 'test@gmail.com' }
    })

    it('Get All Scores', function(done) {
        request(app)
        .get('/scores')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })

    it('Create a Score', function(done) {
        request(app)
        .post('/scores')
        .send(score)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, response) {
            if (err) done(err);
            score.id = response.body.id;
            done();
        })
    })

    after(function() {
        request(app)
        .delete('/scores/' + score.id)
        .expect(200);

        request(app)
        .delete('/users/' + user.id)
        .expect(200);
    })
})
