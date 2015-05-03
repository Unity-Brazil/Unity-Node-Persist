var user = require('../controllers/user');

module.exports = function(app) {
    app.route('/users')
        .get(user.list)
        .post(user.create);

    app.route('/users/:email')
        .get(user.read)
        .put(user.update)
        .delete(user.delete);

    app.param('email', user.userByEmail);
};
