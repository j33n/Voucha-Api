const User = require('../../models/user');
const UserType = require('./UserType');
const UserInputType = require('./UserInputType');

const createUser = {
  type: UserType,
  args: {
    user: {
      type: UserInputType,
    },
  },
  resolve(source, args) {
    //return user arguments
    newUser = new User({
      firstname: args.user.firstname,
      lastname: args.user.lastname,
    });
    const createdUser = newUser.save();
    if (!createdUser) {
      throw new Error('Error');
    }
    return createdUser;
  },
};

module.exports = createUser;
