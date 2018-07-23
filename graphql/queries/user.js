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
          // console.log('query :', query);
          // const promise = query.exec();
          // console.log('promise :', promise);
          // promise.addBack(function (err, docs) {
          //   if (err) {
          //     console.log('err :', err);
          //   } else {
          //     console.log('docs :', docs);
          //   }
          // });
          // console.log('Users we have now :', Model.find({'name': "john doe"}).exec());
          const getUsersQuery = User.find({}).exec();
          getUsersQuery.then(result => {
            console.log('result :', result);
            return result;
          }).catch(err => {
            console.log('err :', err);
            return err;
          });
          // if (!users) {
          //   throw new Error('Error');
          // }
          // users.then(function(err, result) {
          //   if (err){
          //     console.log('err :', err);
          //   }
          //   console.log(result); //will log results.
          // });
          // console.log('users :', users);
          // return users;
        },
      },
    };
  },
});
