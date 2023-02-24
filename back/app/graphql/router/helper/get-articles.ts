import selectArticles from "../../data-access/helper/select-articles";

const getArticles = (params: any) => {
    const { type, price } = params;
    return selectArticles({type, price});
}

export default getArticles;
