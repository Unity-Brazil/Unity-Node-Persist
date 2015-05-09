var path     = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , env      = process.env.NODE_ENV || 'development'
  , host     = process.env.host     || 'localhost'
  , database = process.env.database || 'unity_db'
  , user     = process.env.user     || ''
  , password = process.env.password || ''
  , port     = process.env.port     || 5432;

  global.root = rootPath;

  var config = {
      development    : {
          username   : user
        , password   : password
        , database   : database
        , config     : {
            dialect  : 'postgres'
          , host     : host
          , port     : port
        }
      },
      production     : {
          username   : user
        , password   : password
        , database   : database
        , config     : {
            dialect  : 'postgres'
          , protocol : 'postgres'
          , host     : host
          , port     : port
        }
      },
  }

  module.exports = config[env];
