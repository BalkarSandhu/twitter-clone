const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;;
const User=require('../models/user');

passport.use(new LocalStrategy({usernameField:'email',passwordField:'password'},
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
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

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err){
            console.log("Error in finding user");
            return done(err);
        }
      done(null, user);
    });
  });

  module.exports =passport;