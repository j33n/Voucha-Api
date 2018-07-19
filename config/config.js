module.exports = {
  //MongoDB configuration
  development: {
    db: 'mongodb://127.0.0.1:27017/voucha',
    app: {
      name: 'voucha',
    },
  },
  production: {
    db: 'mongodb://<username>:<password>@ds157325.mlab.com:57325/graphql-api',
    app: {
      name: 'graphql',
    },
  },
};
