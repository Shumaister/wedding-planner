import { FamilyGroupHome } from "../homes/family-group.home";
import { FamilyGroupType } from "../types/family-group.type";

export default class FamilyGroupService {
  private _home: FamilyGroupHome;

  constructor(home: FamilyGroupHome) {
    this._home = home;
  }

  public async createFamily(family: FamilyGroupType) {
    const newFamily: FamilyGroupHome = await this._home.create({ ...family });

    return newFamily;
  }

  public async getFamily(id: string) {
    const newFamily: FamilyGroupHome = await this._home.getById(id);

    return newFamily;
  }

  public deleteFamily(id: string) {
    this._home.delete(id);
  }
}
