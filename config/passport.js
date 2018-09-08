var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

  passport.use(new LocalStrategy(
    function(username, password, done) {
      if (username === 'batman' && password === 'robin') {
        const user = { id: 1, username, password };
        done(null, user);
      }
      return done(null, false, { message: 'Bad credentials.'});
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    const user = { id, username: 'user__username', password: 'user__password' };
    done(null, user);
  });

};

