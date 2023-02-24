import {buildSchema} from "graphql";
import {graphqlHTTP} from "express-graphql";
import getArticles from "./helper/get-articles";
import getArticle from "./helper/get-article";
import postArticle from "./helper/post-article";
import putArticle from "./helper/put-article";
import deleteArticle from "./helper/delete-article";

const schema = buildSchema(`
    type Query {
        article(id: Int!): Article
        articles(type: String, price: Int): [Article]
    },
    type Mutation {
        createArticle(title: String!, type: String!, price: Int!): Article
        updateArticle(id: Int!, title: String, type: String, price: Int): Article
        deleteArticle(id: Int!): Message
    }
    type Article {
        id: Int
        title: String
        type: String
        price: Int
    }
    type Message {
        message: String
    }
`);

const root = {
    articles: getArticles,
    article: getArticle,
    createArticle: postArticle,
    updateArticle: putArticle,
    deleteArticle: deleteArticle
};



const articleRouter = (app: any) => {
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    }));
};

export default articleRouter;
