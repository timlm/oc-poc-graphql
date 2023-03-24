import router from "express-promise-router";
import handleGetArticles from "./helper/handle-get-articles";
import handlePostArticle from "./helper/handle-post-article";
import handlePutArticle from "./helper/handle-put-article";
import handleDeleteArticle from "./helper/handle-delete-article";
import handleGetArticle from "./helper/handle-get-article";

const restRouter = router();

restRouter.get('/articles', handleGetArticles);
restRouter.get('/articles/:id', handleGetArticle);
restRouter.post('/articles', handlePostArticle);
restRouter.put('/articles/:id', handlePutArticle);
restRouter.delete('/articles/:id', handleDeleteArticle);

export default restRouter;
