class Documento {
    private _id: number;
    private _codCaso: number;
    private _tipoDocumento: number;
    private _nombre: string;
    private _url: string;
    private _fechaSubida: Date;

    constructor (id: number, codCaso: number, tipoDocumento: number, nombre: string, url: string, fechasubida: Date) {
        this._id = id;
        this._codCaso = codCaso;
        this._tipoDocumento = tipoDocumento;
        this._nombre = nombre;
        this._url = url;
        this._fechaSubida = fechasubida;
    }

    public get id(): number{
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get codCaso(): number{
        return this._codCaso;
    }

    public set codCaso(value: number) {
        this._codCaso = value;
    }

    public get tipoDocumento(): number{
        return this._tipoDocumento;
    }

    public set tipoDocumento(value: number) {
        this._tipoDocumento = value;
    }

    public get nombre(): string{
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get url(): string{
        return this._url;
    }

    public set url(value: string) {
        this._url = value;
    }

    public get fechaSubida(): Date{
        return this._fechaSubida;
    }

    public set fechaSubida(value: Date) {
        this._fechaSubida = value;
    }
}

export default Documento;