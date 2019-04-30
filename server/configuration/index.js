//const clientID= ''
if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      facebook: {
        clientID: '642246559554873',
        clientSecret: 'de9378a0b728fc7fa3d7463bfd738231',
        callbackURL: 'http://localhost:5000/auth/facebook/callback'
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      facebook: {
        clientID: '642246559554873',
        clientSecret: 'de9378a0b728fc7fa3d7463bfd738231',
        callbackURL: 'http://localhost:5000/auth/facebook/callback'
      },
    },
  };
}
