import type {FunctionComponent} from "react";
import {useState} from "react";
import restClient from "../../../config/axios";
import {gql, useMutation} from "@apollo/client";
import DefaultTemplate from "../template/default-template";
import "./article-form.scss";

const CREATE_ARTICLES = gql`
  mutation createArticles($title: String!, $type: String!, $price: String!){
    createArticle(title: $title, type: $type, price: $price) {
      id
      title
      type
      price
    }
  }
`;

const ArticleForm: FunctionComponent = () => {

    const [formData, setFormData] = useState({});
    const [createArticle, { data: createResponse }] = useMutation(CREATE_ARTICLES, { variables: { ...formData }});


    const handleFormChange = (e: any) => {
        const { id, value } = e.target;
        const newFormData = { ...formData, [id]: value };
        setFormData(newFormData);
    }

    const submitRest = async () => {
        console.log(formData);
        const response = await restClient.post("/articles", formData);
        console.log(response);
    }

    const submitGraphql = async () => {
        await createArticle();
    }

    return (
        <DefaultTemplate title="Create Article">
            <div className="article-form">
                <div className="article-form-field">
                    <label id="title">Title</label>
                    <input id="title" type="text" onChange={handleFormChange}/>
                </div>
                <div className="article-form-field">
                    <label id="type">Type</label>
                    <select id="type" onChange={handleFormChange}>
                        <option value="" selected disabled hidden>--</option>
                        <option value="book">book</option>
                        <option value="food">food</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="article-form-field">
                    <label id="price">Price</label>
                    <input id="price" type="number" onChange={handleFormChange}/>
                </div>

                <div className="article-form__cta">
                    <button className="article-form__button" onClick={submitRest}>Create Article Rest</button>
                    <button className="article-form__button" onClick={submitGraphql}>Create Article Graphql</button>
                </div>
            </div>
        </DefaultTemplate>
)
    ;
};

export default ArticleForm;
