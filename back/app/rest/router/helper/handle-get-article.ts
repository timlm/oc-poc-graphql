import {Response} from "express";
import selectArticle from "../../../core/data-access/helper/select-article";
import {RequestTypedParams} from "../../type";

interface GetArticleRequest {
    id?: string;
}

const handleGetArticle = async (req: RequestTypedParams<GetArticleRequest>, res: Response) => {
    const { id = "" } = req.params;
    const result = await selectArticle(id)
    res.send(result);
};

export default handleGetArticle;
