class SubTipoCaso {
    private _id: number;
    private _nombre: string;
    private _codTipoCaso: number;

    constructor(id: number, nombre: string, codTipoCaso: number) {
        this._id = id;
        this._nombre = nombre;
        this._codTipoCaso = codTipoCaso;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get codTipoCaso(): number {
        return this._codTipoCaso;
    }

    set codTipoCaso(value: number) {
        this._codTipoCaso = value;
    }
}

export default SubTipoCaso;