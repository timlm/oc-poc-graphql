import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import type express from "express";

const appConfig = (app: express.Application) => {
    // cors
    app.use(cors({ origin: "http://localhost:3000", credentials: true }));

    // Add Access logs middle ware
    app.use(morgan("combined", {}));

    // Apply security module
    app.use(helmet());


    // Parse entries
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


};

export { appConfig };

