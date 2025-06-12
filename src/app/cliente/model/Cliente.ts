class Cliente {
    private _id: number;
    private _tipoCliente: number;
    private _nombre: string;
    private _nit_cc: string;
    private _direccion: string;
    private _telefono: string;
    private _correoContacto: string;
    private _activo: boolean;

    constructor(id: number, tipoCliente: number, nombre: string, nit_cc: string, direccion: string, telefono: string,
        correoContacto: string, activo: boolean) {
        this._id = id;
        this._tipoCliente = tipoCliente;
        this._nombre = nombre;
        this._nit_cc = nit_cc;
        this._direccion = direccion;
        this._telefono = telefono;
        this._correoContacto = correoContacto;
        this._activo = activo;
    }

    public get id(): number {
        return this._id;
    }

    public get tipoCliente(): number {
        return this._tipoCliente;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get nit_cc(): string {
        return this._nit_cc;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public get correoContacto(): string {
        return this._correoContacto;
    }

    public get activo(): boolean {
        return this._activo;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set tipoCliente(value: number) {
        this._tipoCliente = value;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public set nit_cc(value: string) {
        this._nit_cc = value;
    }

    public set direccion(value: string) {
        this._direccion = value;
    }

    public set telefono(value: string) {
        this._telefono = value;
    }

    public set correoContacto(value: string) {
        this._correoContacto = value;
    }

    public set activo(value: boolean) {
        this._activo = value;
    }
}

export default Cliente;