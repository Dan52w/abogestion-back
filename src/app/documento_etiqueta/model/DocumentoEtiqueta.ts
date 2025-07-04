class DocumentoEtiqueta {
    private _codDocumento: number;
    private _codEtiqueta: number;

    constructor(codDocumento: number, codEtiqueta: number) {
        this._codDocumento = codDocumento;
        this._codEtiqueta = codEtiqueta;
    }

    public get codDocumento(): number {
        return this._codDocumento;
    }

    public set codDocumento(value: number) {
        this._codDocumento = value;
    }

    public get codEtiqueta(): number {
        return this._codEtiqueta;
    }

    public set codEtiqueta(value: number) {
        this._codEtiqueta = value;
    }
}

export default DocumentoEtiqueta;
