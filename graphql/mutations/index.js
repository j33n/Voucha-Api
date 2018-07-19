const addUser = require('./createUser');
const removeUser = require('./deleteUser').remove;
const updateUser = require('./updateUser').update;

module.exports = {
  addUser,
  removeUser,
  updateUser,
};
