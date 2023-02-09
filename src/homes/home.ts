export default class Home {
  private readonly Model: any;

  constructor(Model: any) {
    this.Model = Model;
  }

  public getById(id: any) {
    return this.Model.findOne({ _id: id });
  }

  public create(data: any) {
    return this.Model.create(data);
  }

  public update(id: any, data: any) {
    return this.Model.update({ id }, data);
  }

  public delete(id: string) {
    return this.Model.delete({ id });
  }
}
