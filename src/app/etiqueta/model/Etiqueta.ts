class Etiqueta {
    private _id: number;
    private _nombre: string;
    private _codTipoEtiqueta: number;

    constructor(id: number, nombre: string, codTipoEtiqueta: number) {
        this._id = id;
        this._nombre = nombre;
        this._codTipoEtiqueta = codTipoEtiqueta;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get codTipoEtiqueta(): number {
        return this._codTipoEtiqueta;
    }

    public set codTipoEtiqueta(value: number) {
        this._codTipoEtiqueta = value;
    }
}

export default Etiqueta;
