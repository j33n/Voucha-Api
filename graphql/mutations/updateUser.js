const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/user');
const UserModel = require('../../models/user');

exports.update = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name } },
      { new: true }
    ).catch((err) => new Error(err));
  },
};
