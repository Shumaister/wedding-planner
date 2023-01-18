export default class Home {
    Model: any;

    constructor(Model: any) {
        this.Model = Model;
    }

    get(id: any) {
        return this.Model.findOne({ id });
    }

    create(data: any) {
        return this.Model.create(data);
    }
    update(id: any, data: any) {
        return this.Model.update({ id }, data);
    }
}