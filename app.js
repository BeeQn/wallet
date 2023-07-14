const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set View's
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Session Handling
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Import Routes
//const routes = require('./routes/index');
const userRoutes = require('./routes/users');
const walletRoutes = require('./routes/wallet');

// Routes
//app.use('/', routes);
app.use('/users', userRoutes);
app.use('/wallet', walletRoutes);


app.get('/register', function (req, res ){
    res.render('register')
})

app.get('/login', function (req, res ){
    res.render('login')
})
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app;
