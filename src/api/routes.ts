import { promisifyAll } from "bluebird";
import express, { Request, Response } from "express";
import UserHome from "../homes/user.home";
const router = express.Router();

router.use("/test", (req: Request, res: Response) => {
  const userHome = new UserHome();
  return userHome
    .getById("63c83ca65e5114dad2012c6f")
    .then((it: any) => res.send(it))
    .catch((err: any) => res.send(err));
});

export default router;


// https://www.becomebetterprogrammer.com/how-to-use-error-handler-middleware-with-express-js-and-typescript/