const { GraphQLObjectType, GraphQLList } = require('graphql');
const User = require('../../models/user');
const { userType } = require('../types/user');

// Query
exports.QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: function() {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function() {
          const query = User.find({}, function(err, docs) {
            if (err) {
              console.log('err :', err);
            } else {
              console.log('docs :', docs);
            }
          });
          const getUsersQuery = User.find({}).exec();
          getUsersQuery.then(result => {
            console.log('result :', result);
            return result;
          }).catch(err => {
            console.log('err :', err);
            return err;
          });
        },
      },
    };
  },
});
