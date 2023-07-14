const express = require('express');
const User = require('../models/user');
const Transaction = require('../models/transaction');
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.session.loggedin) {
    const user = await User.findOne({ where: { username: req.session.username } });
    const transactions = await Transaction.findAll({ where: { userId: user.id } });
    res.render('wallet', { user: user, transactions: transactions });
  } else {
    res.send('Please login to view this page!');
  }
});

router.post('/transaction', async (req, res) => {
  if (req.session.loggedin) {
    const user = await User.findOne({ where: { username: req.session.username } });
    const { type, amount } = req.body;

    if (type === 'deposit') {
      user.balance += parseFloat(amount);
    } else if (type === 'withdraw' && user.balance >= amount) {
      user.balance -= parseFloat(amount);
    } else {
      return res.status(400).send('Invalid transaction');
    }

    await user.save();
    await Transaction.create({ userId: user.id, type, amount });

    res.redirect('/wallet');
  } else {
    res.send('Please login to view this page!');
  }
});

module.exports = router;
