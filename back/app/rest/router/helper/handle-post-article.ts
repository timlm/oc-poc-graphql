import {Response} from "express";
import insertArticle from "../../../core/data-access/helper/insert-article";
import {RequestTypedBody} from "../../type";
import {Article} from "../../type/article";

const handlePostArticle = async (req: RequestTypedBody<Article>, res: Response) => {
    const { ...article } = req.body;
    const result = await insertArticle(article)
    res.send(result);
};

export default handlePostArticle;
