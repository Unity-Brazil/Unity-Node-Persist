# Unity-Node-Persist
A basic example using NodeJS and Sequelize as a API for persist data for Unity games.

# Demo
WebGL preview: http://unity-brazil.github.io/Unity-Node-Persist/

# Get Started

Download this project as [zip](https://github.com/Unity-Brazil/Unity-Node-Persist/archive/master.zip). 

or clone this project

`git clone git@github.com:Unity-Brazil/Unity-Node-Persist.git`

# Node

## Install

`npm install`

## Database

I'm using Sequelize with `PostgreSQL`, but you use other database changing the dialect on `config/config.js` file.

`$ psql -h localhost -U user -p 5432 -d unity_db`

### Create Database

`# create database unity_db;`

after run application sequelize will create our tables


## Run

`npm start`

# Contributions
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

# License
[MIT](./LICENSE)

