const { GraphQLObjectType } = require('graphql');

const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const createOffer = require('./createOffer');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root of all mutations',
  fields: {
    createUser,
    updateUser,
    deleteUser,
    createOffer,
  },
});

module.exports = MutationType;
