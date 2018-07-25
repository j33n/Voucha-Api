const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const OfferInputType = new GraphQLInputObjectType({
  name: 'OfferInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    offer: {
      type: new GraphQLNonNull(GraphQLString),
    },
    start_date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    end_date: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = OfferInputType;
