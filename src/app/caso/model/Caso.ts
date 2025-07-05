class Caso {
    private _id: number;
    private _titulo: string;
    private _descripcion: string;
    private _estado: number;
    private _fechaInicio: Date;
    private _cliente: string;
    private _codSubtipoCaso: number;
    private _codCasoPadre: number;

    constructor(id: number, titulo: string, descripcion: string, estado: number, fechaInicio: Date,cliente: string,
        codSubtipoCaso: number, codCasoPadre: number) {
        this._id = id;
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._estado = estado;
        this._fechaInicio = fechaInicio;
        this._cliente = cliente;
        this._codSubtipoCaso = codSubtipoCaso;
        this._codCasoPadre = codCasoPadre;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(value: string) {
        this._titulo = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }

    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get estado(): number {
        return this._estado;
    }

    public set estado(value: number) {
        this._estado = value;
    }

    public get fechaInicio(): Date {
        return this._fechaInicio;
    }

    public set fechaInicio(value: Date) {
        this._fechaInicio = value;
    }

    public get cliente(): string{
        return this._cliente;
    }

    public set cliente(value: string) {
        this._cliente = value;
    }

    public get codSubtipoCaso(): number {
        return this._codSubtipoCaso;
    }

    public set codSubtipoCaso(value: number) {
        this._codSubtipoCaso = value;
    }

    public get codCasoPadre(): number {
        return this._codCasoPadre;
    }

    public set codCasoPadre(value: number) {
        this._codCasoPadre = value;
    }
}

export default Caso;