class TipoDocumento {
    private _id: number;
    private _nombre: string;
    private _descripcion: string;

    constructor(id: number, nombre: string, descripcion: string) {
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
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

    public get descripcion(): string {
        return this._descripcion;
    }

    public set descripcion(value: string) {
        this._descripcion = value;
    }
}

export default TipoDocumento;