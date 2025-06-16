class PersonaRol {
    private _id: number;
    private _codRol: number;
    private _codPersona: number;

    constructor(id: number, codRol: number, codPersona: number) {
        this._id = id;
        this._codRol = codRol;
        this._codPersona = codPersona;
    }

    public get id(): number{
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get codRol(): number{
        return this._codRol;
    }

    public set codRol(value: number) {
        this._codRol = value;
    }

    public get codPersona(): number{
        return this._codPersona;
    }

    public set codPersona(value: number) {
        this._codPersona = value;
    }
}

export default PersonaRol;