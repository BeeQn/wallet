const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('bancoexchangetes', 'sauma12', '2248787aA@', {
    host: 'db4free.net',
    dialect: 'mysql'
});

class Transaction extends Model {}

Transaction.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
}, {
  sequelize,
  modelName: 'Transaction'
});

module.exports = Transaction;
