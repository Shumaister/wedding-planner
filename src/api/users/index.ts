import express, { Request, Response } from 'express';
const router = express.Router();

router.use("/test", (req: Request, res: Response, next) => {


    res.send('Hola Mundo, soy un server en TS!');

});

export default router;
