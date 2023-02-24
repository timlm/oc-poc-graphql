import {useState} from "react";
import restClient from "./config/axios";
import graphqlClient from "./config/apollo";
import './App.css'
import {ApolloProvider, gql} from "@apollo/client";
import HomeRest from "./domain/rest/page/home-rest";
import HomeGraphql from "./domain/graphql/page/home-graphql";

function App() {

    return (
        <div className="App">
            <ApolloProvider client={graphqlClient}>
                <HomeRest/>
                <HomeGraphql/>
            </ApolloProvider>
        </div>
    )
}

export default App
