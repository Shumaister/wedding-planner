import express, { Request, Response } from "express";
import User from "../../schemas/user.model";
const router = express.Router();

router.get("/test", (req: Request, res: Response, next) => {
  return User.create({ name: "Test", email: "", password: "" });
  res.send("Hola Mundo, soy un server en TS!");
});

export default router;
