import cors from "cors";
import articleRouter from "./router";

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

articleRouter(app);

app.listen(3002, () => console.log('Express GraphQL Server Now Running On localhost:3002/graphql'));


