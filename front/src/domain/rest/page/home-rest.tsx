import type { FunctionComponent } from "react";
import restClient from "../../../config/axios";
import {useState} from "react";
import ArticleList from "../../core/article-list/article-list";
import DefaultTemplate from "../../core/template/default-template";
import "./home-rest.scss";

const HomeRest: FunctionComponent = () => {

    const [result, setResult] = useState([]);

    const sendRestRequest = async () => {
        const result = await restClient.get("/articles");
        setResult(result?.data);
    };

    return (
        <DefaultTemplate title="Get Article REST">
            <div className="home-rest">
                <button onClick={() => sendRestRequest()}>get Articles Rest</button>
                <ArticleList type="rest" articles={result} handleRefresh={sendRestRequest}/>
            </div>
        </DefaultTemplate>
    );
};

export default HomeRest;
