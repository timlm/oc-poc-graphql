import {Request, Response} from "express";
import updateArticle from "../../../core/data-access/helper/update-article";
import {Article} from "../../type/article";

interface ParamsPutArticleRequest {
    id: number
}

interface PutArticleRequest<T, I> extends Request<T, never, I, never>{
    params: T,
    body: I
}

const handlePutArticle = async (req: PutArticleRequest<ParamsPutArticleRequest, Article>, res: Response) => {
    const { params, body } = req;
    const { id } = params;
    const { ...article } = body;
    const result = await updateArticle(id, article)
    res.send(result);
};

export default handlePutArticle;
