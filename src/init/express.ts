//import morgan from "morgan"; TODO hacer andar morgan
import { Router } from "express-serve-static-core";
import apiRouter from "../api/routes";
import userRoutes from "../api/users"
import bodyParser from "body-parser";
import familyGroupRoutes from "../api/familyGruop"

export default (app: { use: (arg0: string, arg1: Router) => void }) => {
  //app.use(morgan("dev"));

  app.use(bodyParser.json());

  app.use("/api", apiRouter);
  app.use("/api/family", familyGroupRoutes);
  app.use("/api/users", userRoutes);
};
