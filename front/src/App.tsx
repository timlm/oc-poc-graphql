import {useState} from "react";
import { restClient, graphqlClient } from "./config/axios";
import './App.css'

function App() {
    const [result, setResult] = useState();

    const sendRestRequest = async (endpoint: string) => {
        const result = await restClient.get(endpoint);
        setResult(result?.data);
        console.log(result)
    };

    const sendGraphqlRequest = async (endpoint: string) => {
        const result = await graphqlClient.get(endpoint);
        setResult(result?.data);
        console.log(result)
    };

    return (
        <div className="App">
            <button onClick={() => sendRestRequest("rest")}>click Rest</button>
            <button onClick={() => sendGraphqlRequest("graphql")}>click GraphQL</button>
            <p>{result}</p>
        </div>
    )
}

export default App
