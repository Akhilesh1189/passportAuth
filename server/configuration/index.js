//const clientID= ''
if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
  };
}
