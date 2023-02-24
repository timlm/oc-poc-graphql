import removeArticle from "../../data-access/helper/remove-article";

const deleteArticle = (params: any) => {
    const { id } = params;
    return removeArticle(id);
}

export default deleteArticle;
