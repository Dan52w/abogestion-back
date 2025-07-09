class Vinculacion {
    private _codPersona: number;
    private _codCaso: number;
    private _codTipoVinculacion: number;

    constructor(codPersona: number, codCaso: number, codTipoVinculacion: number) {
        this._codPersona = codPersona;
        this._codCaso = codCaso;
        this._codTipoVinculacion = codTipoVinculacion;
    }

    public get codPersona(): number {
        return this._codPersona;
    }

    public set codPersona(value: number) {
        this._codPersona = value;
    }

    public get codCaso(): number {
        return this._codCaso;
    }

    public set codCaso(value: number) {
        this._codCaso = value;
    }

    public get codTipoVinculacion(): number {
        return this._codTipoVinculacion;
    }

    public set codTipoVinculacion(value: number) {
        this._codTipoVinculacion = value;
    }
}

export default Vinculacion;