import {RequestTypedQuery} from "../../type";
import {Response} from "express";
import selectArticles from "../../../core/data-access/helper/select-articles";

const handleGetArticles = async (req: RequestTypedQuery, res: Response) => {
    const { type, price } = req.query;
    const result = await selectArticles({ type, price })
    res.send(result);
};

export default handleGetArticles;
