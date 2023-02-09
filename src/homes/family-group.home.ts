import FamilyGroups from "../schemas/family-group.model";
import Home from "./home";

export class FamilyGroupHome extends Home {
  constructor() {
    super(FamilyGroups);
  }
}
