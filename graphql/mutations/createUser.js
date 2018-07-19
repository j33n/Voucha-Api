const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/user');
const UserModel = require('../../models/user');

exports.add = {
  type: UserType.userType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    const uModel = new UserModel(params);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error('Error');
    }
    return newUser;
  },
};
