const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    firstname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = UserInputType;
