"use strict";

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("user", {
        username    : {
          type      : DataTypes.STRING
        , allowNull : false
        , unique    : true
        , validate  : {
            is      : /^\w+$/i
          , len     : [3, 16]
        }
      }
      , email       : {
          type      : DataTypes.STRING
        , allowNull : false
        , unique    : true
        , validate  : {
            isEmail : {
                msg : 'Email is not Valid'
            }
        }
      }
    }, {
        classMethods  : {
            associate : function(models) {
                User.hasMany(models.score, {
                    foreignKey    : {
                        name      : 'user_score'
                      , allowNull : false
                    }
                });
            }
        }
    });

    return User;
};
