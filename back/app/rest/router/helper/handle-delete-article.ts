import {Response} from "express";
import removeArticle from "../../../core/data-access/helper/remove-article";
import {RequestTypedParams} from "../../type";

interface DeleteArticleRequest {
    id: number;
}

const handleDeleteArticle = async (req: RequestTypedParams<DeleteArticleRequest>, res: Response) => {
    const { id } = req.params;
    const result = await removeArticle(id)
    res.send(result);
};

export default handleDeleteArticle;
