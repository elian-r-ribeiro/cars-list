export class Car {
    private _brand: string;
    private _model: string;

    constructor(brand : string, model : string){
        this._brand = brand;
        this._model = model;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }

    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }
}
