class Login{
    private _id: number;
    private _codPersona: number;
    private _password: string;

    constructor (id: number, codPersona: number, password: string) {
        this._id = id;
        this._codPersona = codPersona;
        this._password = password;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get codPersona(): number {
        return this._codPersona;
    }

    public set codPersona(value: number) {
        this._codPersona = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }
}

export default Login;