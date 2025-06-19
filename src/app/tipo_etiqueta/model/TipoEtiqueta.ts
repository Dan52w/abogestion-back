class TipoEtiqueta {
    private _id: number;
    private _nombre: string;

    constructor(id: number, nombre: string) {
        this._id = id;
        this._nombre = nombre;
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
}

export default TipoEtiqueta;