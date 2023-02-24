import type { FunctionComponent } from "react";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import {useState} from "react";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`;

const GET_POSTS_FILTER = gql`
  query GetPosts($author: String) {
    posts(author: $author) {
      id
      author
      body
    }
  }
`;

const HomeGraphql: FunctionComponent = () => {
    const [result, setResult] = useState();
    const [getPosts, { data }] = useLazyQuery(GET_POSTS);
    const [getPostsFilter, { data: postsFiltered }] = useLazyQuery(GET_POSTS_FILTER, { variables: { author: "John" }});

    const sendGraphqlRequest = async () => {
        await getPosts();
    }

    const sendPostsFilter = async () => {
        await getPostsFilter();
    }

    return (
        <div>
            <button onClick={() => sendGraphqlRequest()}>click GraphQL</button>
            <button onClick={() => sendPostsFilter()}>click GraphQL 2 </button>
            <p>{JSON.stringify(data)}</p>
            <p>{JSON.stringify(postsFiltered)}</p>
        </div>
    );
};

export default HomeGraphql;
