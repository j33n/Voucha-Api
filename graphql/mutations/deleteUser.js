const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/user');
const UserModel = require('../../models/user');

exports.remove = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    const removed_user = UserModel.findByIdAndRemove(params.id).exec();
    if (!removed_user) {
      throw new Error('Error');
    }
    return removeduser;
  },
};
