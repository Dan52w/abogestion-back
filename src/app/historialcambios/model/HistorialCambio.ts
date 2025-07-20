class HistorialCambio {
    private _id: number;
    private _codCaso: number;
    private _codPersona: number;
    private _fechaCambio: Date;
    private _observacion: string;

    constructor (id: number, codCaso: number, codPersona: number, fechaCambio: Date, observacion: string) {
        this._id = id;
        this._codCaso = codCaso;
        this._codPersona = codPersona;
        this._fechaCambio = fechaCambio;
        this._observacion = observacion;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get codCaso(): number {
        return this._codCaso;
    }

    set codCaso(value: number) {
        this._codCaso = value;
    }

    get codPersona(): number {
        return this._codPersona;
    }

    set codPersona(value: number) {
        this._codPersona = value;
    }

    get fechaCambio(): Date {
        return this._fechaCambio;
    }

    set fechaCambio(value: Date) {
        this._fechaCambio = value;
    }

    get observacion(): string {
        return this._observacion;
    }

    set observacion(value: string) {
        this._observacion = value;
    }
}

export default HistorialCambio;