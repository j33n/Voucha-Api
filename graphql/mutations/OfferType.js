const { GraphQLObjectType, GraphQLString } = require('graphql');

const OfferType = new GraphQLObjectType({
  name: 'Offer',
  description: 'General Offer Creation',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (offer) => offer._id,
    },
    name: {
      type: GraphQLString,
      resolve: (offer) => offer.name,
    },
    description: {
      type: GraphQLString,
      resolve: (offer) => offer.description,
    },
    offer: {
      type: GraphQLString,
      resolve: (offer) => offer.offer,
    },
    start_date: {
      type: GraphQLString,
      resolve: (offer) => offer.start_date,
    },
    end_date: {
      type: GraphQLString,
      resolve: (offer) => offer.end_date,
    },
  }),
});

module.exports = OfferType;
