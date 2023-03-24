import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {appConfig} from "./config";
import restRouter from "./router";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

appConfig(app);

app.use("/rest", restRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server coucou');
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
