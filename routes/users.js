const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ username: req.body.username, password: hashedPassword });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      req.session.loggedin = true;
      req.session.username = user.username;
      res.redirect('/wallet');
    } else {
      res.send('Incorrect Username and/or Password!');
    }
  } catch {
    res.redirect('/login');
  }
});

module.exports = router;
