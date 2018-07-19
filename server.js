const express = require('express');
const mongoose = require('./config/mongoose');
const express_graphql = require('express-graphql');
const userSchema = require('./graphql/index');

const { buildSchema } = require('graphql');
const port = process.env.PORT || 5000;

const db = mongoose();

// Create an express server
const app = express();

// // GraphQL schema
// const schema = buildSchema(`
//     type Query {
//         course(id: Int!): Course
//         courses(topic: String): [Course]
//     },
//     type Course {
//         id: Int
//         title: String
//         author: String
//         description: String
//         topic: String
//         url: String
//     }
// `);

// const coursesData = [
//     {
//         id: 1,
//         title: 'The Complete Node.js Developer Course',
//         author: 'Andrew Mead, Rob Percival',
//         description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
//         topic: 'Node.js',
//         url: 'https://codingthesmartway.com/courses/nodejs/'
//     },
//     {
//         id: 2,
//         title: 'Node.js, Express & MongoDB Dev to Deployment',
//         author: 'Brad Traversy',
//         description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
//         topic: 'Node.js',
//         url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
//     },
//     {
//         id: 3,
//         title: 'JavaScript: Understanding The Weird Parts',
//         author: 'Anthony Alicea',
//         description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
//         topic: 'JavaScript',
//         url: 'https://codingthesmartway.com/courses/understand-javascript/'
//     }
// ]

// const getCourse = function(args) {
//     const id = args.id;
//     return coursesData.filter(course => {
//         return course.id == id;
//     })[0];
// }

// const getCourses = function(args) {
//     if (args.topic) {
//         const topic = args.topic;
//         return coursesData.filter(course => course.topic === topic);
//     } else {
//         return coursesData;
//     }
// }

// const root = {
//     course: getCourse,
//     courses: getCourses
// };
console.log('global :', global);

// Create a GraphQL endpoint
app.use(
  '/graphql',
  express_graphql({
    schema: userSchema,
    rootValue: global,
    graphiql: true,
  })
);

app.listen(port, () =>
  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`)
);
