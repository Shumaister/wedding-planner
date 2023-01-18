//import morgan from "morgan"; TODO hacer andar morgan
import { Router } from "express-serve-static-core";
import apiRouter from "../api/routes";
import bodyParser from "body-parser";

export default (app: { use: (arg0: string, arg1: Router) => void; }) => {
    // app.use(morgan("dev"));
    app.use("/api", apiRouter);
};
