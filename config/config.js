module.exports = {
  //MongoDB configuration
  development: {
    db: process.env.DATABASE_URI,
    app: {
      name: 'voucha',
    },
  },
  production: {
    db: process.env.DATABASE_URI,
    app: {
      name: 'voucha',
    },
  },
};
