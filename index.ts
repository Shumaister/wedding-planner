import express, { Express } from 'express';
import expressInit from "./src/init/express";
import mongoInit from "./src/init/mongo";
import config from "./src/config";

const app: Express = express();
const { port } = config;

expressInit(app);

mongoInit().then(() =>
    app.listen(port, () => console.log("Listening in port", port))
);