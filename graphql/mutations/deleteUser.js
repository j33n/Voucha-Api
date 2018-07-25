const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('./UserType');
const UserModel = require('../../models/user');

const removeUser = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, args) {
    const removed_user = UserModel.findByIdAndRemove(args.id).exec();
    if (!removed_user) {
      throw new Error('Error');
    }
    return removed_user;
  },
};

module.exports = removeUser;
