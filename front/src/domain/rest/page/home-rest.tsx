import type { FunctionComponent } from "react";
import restClient from "../../../config/axios";
import {useState} from "react";

const HomeRest: FunctionComponent = () => {

    const [result, setResult] = useState();

    const sendRestRequest = async (endpoint: string) => {
        const result = await restClient.get(endpoint);
        setResult(result?.data);
        console.log(result)
    };
    return (
        <div>
            <button onClick={() => sendRestRequest("rest")}>click Rest</button>
            <p>{result}</p>
        </div>
    );
};

export default HomeRest;
