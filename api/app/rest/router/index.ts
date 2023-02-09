import {Request, Response} from "express";
import router from "express-promise-router";

const restRouter = router();

restRouter.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server coucou');
});

export default restRouter;
