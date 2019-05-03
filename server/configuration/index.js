//const clientID= ''
if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      facebook: {
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:5000/auth/facebook/callback'
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      facebook: {
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:5000/auth/facebook/callback'
      },
    },
  };
}
