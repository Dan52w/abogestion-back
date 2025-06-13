class Persona {
    private _id: number;
    private _cedula: string;
    private _nombre: string;
    private _apellido: string;
    private _fecha_nacimiento: Date;
    private _correo: string;
    private _telefono: string;
    private _direccion: string;
    private _activo: boolean;
    private _codCliente: number;

    constructor(id: number, cedula: string, nombre: string, apellido: string, fecha_nacimiento: Date,
        correo: string, telefono: string, direccion: string, activo: boolean, codCliente: number) {
        this._id = id;
        this._cedula = cedula;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fecha_nacimiento = fecha_nacimiento;
        this._correo = correo;
        this._telefono = telefono;
        this._direccion = direccion;
        this._activo = activo;
        this._codCliente = codCliente;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get cedula(): string {
        return this._cedula;
    }
    public set cedula(value: string) {
        this._cedula = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }

    public get fecha_nacimiento(): Date {
        return this._fecha_nacimiento;
    }
    public set fecha_nacimiento(value: Date) {
        this._fecha_nacimiento = value;
    }

    public get correo(): string {
        return this._correo;
    }
    public set correo(value: string) {
        this._correo = value;
    }

    public get telefono(): string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }

    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }

    public get activo(): boolean {
        return this._activo;
    }
    public set activo(value: boolean) {
        this._activo = value;
    }

    public get codCliente(): number {
        return this._codCliente;
    }
    public set codCliente(value: number) {
        this._codCliente = value;
    }
}

export default Persona;