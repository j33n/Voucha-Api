const express = require('express');
const graphqlHTTP = require('express-graphql');
require('dotenv').config()

const mongoose = require('./config/mongoose');
const { userSchema } = require('./graphql/index');

const port = process.env.PORT || 5000;

// Create an express server
const app = express();

const db = mongoose();

// Create a GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true,
  })
);

app.listen(port, () =>
  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`)
);
