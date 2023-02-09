const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'Hello World!'
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3002, () => console.log('Express GraphQL Server Now Running On localhost:3002/graphql'));


