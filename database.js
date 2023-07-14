const Sequelize = require('sequelize');
const sequelize = new Sequelize('bancoexchangetes', 'sauma12', '2248787aA@', {
  host: 'db4free.net',
  dialect: 'mysql'
});

module.exports = sequelize;