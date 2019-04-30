const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration');

signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(), 
    exp: new Date().setDate(new Date().getDate() + 1) 
  }, JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;

    // Check if there is a user with the same email
    let foundUser = await User.findOne({ "local.email": email });
    if (foundUser) { 
      return res.status(403).json({ error: 'Email is already in use'});
    }

    foundUser = await User.findOne({ "facebook.email": email });
    if (foundUser) {
      foundUser.methods.push('local')
      foundUser.local = {
        email: email, 
        password: password
      }
      await foundUser.save()
      // Generate the token
      const token = signToken(foundUser);
      // Respond with token
      res.status(200).json({ token });
    }
    
    // Create a new user
    const newUser = new User({ 
      methods: ['local'],
      local: {
        email: email, 
        password: password
      }
    });

    await newUser.save();

    // Generate the token
    const token = signToken(newUser);
    // Respond with token
    res.status(200).json({ token });
  },

  signIn: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  },


  facebookOAuth: async (req, res, next) => {
    
    console.log('facebook data',req)
    const token = signToken(req.user);
    res.status(200).json({ token });
  },
  dashboard: async (req, res, next) => {
    console.log('Working!');
    res.json({ 
      secret: "resource",
      methods: req.user.methods
    });
  }
}