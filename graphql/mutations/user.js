const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');
const User = require('../../models/user');

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    firstname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'General User Creation',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (user) => user._id,
    },
    firstname: {
      type: GraphQLString,
      resolve: (user) => user.firstname,
    },
    lastname: {
      type: GraphQLString,
      resolve: (user) => user.lastname,
    },
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root of all mutations',
  fields: {
    createUser: {
      type: UserType,
      args: {
        user: {
          type: UserInputType,
        },
      },
      resolve(source, args) {
        //return user arguments
        console.log('args :', args);
        newUser = new User({
          firstname: args.user.firstname,
          lastname: args.user.lastname,
        });
        return newUser.save(function(err) {
          if (err) {
            console.log('err :', err);
            return next(err);
          }
          return newUser;
        });
      },
    },
  },
});

module.exports = MutationType;
