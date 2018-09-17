
module.exports = (passport, app, User) => {

  app.get('/auth/google', passport.authenticate('google',
    {
      scope: ['profile', 'email'],
      callbackURL : '/auth/google/callback',
      accessType: 'offline',
      prompt: 'consent'
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google', {
      callbackURL : '/auth/google/callback'
    }), (req, res) => {
     if(req.user.name){
       res.redirect('/dashboard');
     }else{
       User.findById(req.user._id).then((user) => {
         user.admin = true;
         user.save().then(() => {
           res.redirect('/finish-registration');
         });
       })
     }
    }
  );



  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


  app.get('/api/current_user', (req, res) => {
      res.send(req.user);
  })

  // Finish User Account
  app.post('/api/user/new', reqLogin, (req, res) => {
    User.findById(req.user._id).then((user) => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.username = req.body.username;
      user.location.adress = req.body.location;
      user.save().then(() => {
        res.redirect('/dashboard');
      })
    })
  })



}
