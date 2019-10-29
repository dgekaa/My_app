const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
    	'Access-Control-Allow-Headers', 
    	'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
    app.options('*', (req, res) => {
        res.header(
        	'Access-Control-Allow-Methods', 
        	'GET, PATCH, PUT, POST, DELETE, OPTIONS'
        );
        res.send();
    });
});

app.use(session({
    secret: 'Secret_password',
    resave: false,
    saveUninitialized: false
}));


passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
));

// ROUTES
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/toDo", require("./routes/toDo"));

// CONNECTS
const db = require("./config/keys");
mongoose.connect(db.MongoURI + db.DB,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`Сервер запущен на порту ${PORT}!`);
});
