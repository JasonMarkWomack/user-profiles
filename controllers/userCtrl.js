

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

	login: function( req, res ) {
    console.log(req.body);
    console.log('this is the req.body.name',req.body.name);
    console.log('this is the req.body.password',req.body.password);
    var userFound = false;
		users.forEach(function( user ) {
      console.log('this is user',user);
      console.log('this is user.name', user.name);
      console.log('this is user.password', user.password);
			if (user.name === req.body.name && user.password === req.body.password) {
        console.log('this is the user',user);
        req.session.currentUser = user;
        console.log('this is a ',req.session.currentUser);
				userFound = true;
        return userFound;
			}
		});
		if (userFound) {
      console.log('isUserfound',userFound);
			res.send({ userFound: true });
		} else {
			res.send({ userFound: false });
		}
	}
};
