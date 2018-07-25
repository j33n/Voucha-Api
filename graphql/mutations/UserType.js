const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'General User Creation',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (user) => user._id,
    },
    firstname: {
      type: GraphQLString,
      resolve: (user) => user.firstname,
    },
    lastname: {
      type: GraphQLString,
      resolve: (user) => user.lastname,
    },
  }),
});

module.exports = UserType;
