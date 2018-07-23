const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { QueryType } = require('./queries/user');
const MutationType = require('./mutations/user');

exports.userSchema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
