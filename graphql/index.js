const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { queryType } = require('./queries/user');
const { mutation } = require('./mutations/index');

exports.userSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  }),
});
