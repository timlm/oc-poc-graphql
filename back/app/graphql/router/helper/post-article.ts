import insertArticle from "../../../core/data-access/helper/insert-article";

const postArticle = (article: any) => {
    return insertArticle(article);
}

export default postArticle;
