"use strict";

module.exports = function(sequelize, DataTypes) {

    var Score = sequelize.define("score", {
        value : DataTypes.FLOAT
    }, {
        classMethods  : {
            associate : function(models) {
                Score.belongsTo(models.user, { foreignKey : 'user_score' });
            }
        }
    });

    return Score;
};
