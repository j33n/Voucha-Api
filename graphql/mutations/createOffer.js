const Offer = require('../../models/offer');
const OfferType = require('./OfferType');
const OfferInputType = require('./OfferInputType');

const createOffer = {
  type: OfferType,
  args: {
    offer: {
      type: OfferInputType,
    },
  },
  resolve(source, args) {
    //return offer arguments
    newOffer = new Offer({
      name: args.offer.name,
      description: args.offer.description,
      offer: args.offer.offer,
      start_date: args.offer.start_date,
      end_date: args.offer.end_date,
    });
    const createdOffer = newOffer.save();
    if (!createdOffer) {
      throw new Error('Error');
    }
    return createdOffer;
  },
};

module.exports = createOffer;
