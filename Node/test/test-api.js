'use strict';

var request = require('supertest')
  , should  = require('should')
  , app     = require('../app');

describe('Users API tests', function() {

    it('Get All Users', function(done) {
        request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    });
});
