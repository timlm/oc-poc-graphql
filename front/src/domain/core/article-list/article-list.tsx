import {FunctionComponent, useState} from "react";
import restClient from "../../../config/axios";
import "./article-list.scss";
import {gql, useMutation} from "@apollo/client";

interface articleListProps {
    type: string,
    articles: Article[],
    handleRefresh: Function,
}

const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: Int!) {
    deleteArticle(id: $id) {
      message
    }
  }
`;

const ArticleList: FunctionComponent<articleListProps> = (props) => {
    const { type, articles = [], handleRefresh } = props;
    const [idSelected, setIdSelected] = useState("");

    const [deleteArticleGraphQL, { data: deleteResponse }] = useMutation(DELETE_ARTICLE, { variables: { id: idSelected }});


    const deleteArticle = async (id : string) => {
        if (type === "rest") {
            await restClient.delete(`/articles/${id}`);
        } else if (type === "graphql") {
            await setIdSelected(id);
            await deleteArticleGraphQL();
        }
        handleRefresh();
    }

    const renderArticles = (article: Article) => {
        const { id, title, type, price } = article
        return (
            <li className="article-list__row">
                <span>{title}</span>
                <span>{type}</span>
                <span>{price}</span>
                <span className="article-list__row--action" onClick={() => deleteArticle(id)}>[X]</span>
            </li>
        )
    }

    const renderHeader = () => {
        return (
            <li className="article-list__row">
                <span>Title</span>
                <span>Type</span>
                <span>Price</span>
            </li>
        )
    };

    return (
        <div className="article-list">
            {articles.length > 0 && <ul className="article-list__content">
                {renderHeader()}
                {articles?.map(renderArticles)}
            </ul>
            }
        </div>
    )
}

export default ArticleList;

