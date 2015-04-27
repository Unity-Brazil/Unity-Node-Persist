var score = require('../controllers/score');

module.exports = function(app) {
    app.route('/scores')
        .get(score.list)
        .post(score.create);

    app.route('/scores/:scoreId')
        .get(score.read)
        .put(score.update)
        .delete(score.delete);

    app.param('scoreId', score.scoreById);
};
