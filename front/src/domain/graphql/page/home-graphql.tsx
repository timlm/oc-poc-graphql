import type { FunctionComponent } from "react";
import {gql, useLazyQuery, useMutation} from "@apollo/client";
import ArticleList from "../../core/article-list/article-list";
import DefaultTemplate from "../../core/template/default-template";
import "./home-graphql.scss";

const GET_ARTICLES = gql`
  query getArticles {
    articles {
      id
      title
      type
      price
    }
  }
`;

const HomeGraphql: FunctionComponent = () => {
    const [getArticles, { data: articlesResponse, refetch }] = useLazyQuery(GET_ARTICLES);

    const sendGraphqlRequest = async () => {
        await refetch();
    }

    return (
        <DefaultTemplate title={"Get Article GraphQL"}>
            <div className="home-graphql">
                <button onClick={() => sendGraphqlRequest()}>get Articles GraphQL</button>
                <ArticleList type="graphql" articles={articlesResponse?.articles} handleRefresh={refetch}/>
            </div>
        </DefaultTemplate>
    );
};

export default HomeGraphql;
