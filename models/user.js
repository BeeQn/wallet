const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('<database>', '<username>', '<password>', {
    host: 'localhost',
    dialect: 'mysql'
});

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  balance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
