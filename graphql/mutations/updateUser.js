const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('./UserType');
const UserModel = require('../../models/user');

const updateUser = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    firstname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, args) {
    return UserModel.findByIdAndUpdate(
      args.id,
      { $set: { firstname: args.firstname, lastname: args.lastname } },
      { new: true }
    ).catch((err) => new Error(err));
  },
};

module.exports = updateUser;
