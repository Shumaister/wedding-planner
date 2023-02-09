import express, { Request, Response } from "express";
import { json } from "stream/consumers";
import { FamilyGroupHome } from "../../homes/family-group.home";
import FamilyGroupService from "../../services/family-group.service";
import { FamilyGroupType } from "../../types/family-group.type";

const router = express.Router();

router.post("/", async (req: Request, res: Response, next) => {
  const service: FamilyGroupService = new FamilyGroupService(
    new FamilyGroupHome()
  );
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  
  
  res.send(await service.createFamily(req.body));
});

router.get("/:id", async (req: Request, res: Response, next) => {
  const service: FamilyGroupService = new FamilyGroupService(
    new FamilyGroupHome()
  );

  res.send(await service.getFamily(req.params.id));
});

export default router;
