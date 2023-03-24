import selectArticle from "../../../core/data-access/helper/select-article";

const getArticle = (params: any) => {
    const { id } = params;
    return selectArticle(id);
}

export default getArticle;
