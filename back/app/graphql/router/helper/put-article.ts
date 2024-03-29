import updateArticle from "../../../core/data-access/helper/update-article";

const putArticle = (params: any) => {
    const { id, ...article } = params;
    return updateArticle(id, article);
}

export default putArticle;
