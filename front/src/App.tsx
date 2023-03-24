import {useState} from "react";
import restClient from "./config/axios";
import graphqlClient from "./config/apollo";
import './App.css'
import {ApolloProvider, gql} from "@apollo/client";
import HomeRest from "./domain/rest/page/home-rest";
import HomeGraphql from "./domain/graphql/page/home-graphql";
import ArticleForm from "./domain/core/article-form/article-form";

function App() {

    return (
        <div className="App">
            <ApolloProvider client={graphqlClient}>
                <ArticleForm/>
                <HomeRest/>
                <HomeGraphql/>
            </ApolloProvider>
        </div>
    )
}

export default App
