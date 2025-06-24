import { Request, Response } from "express";
import ServiceAddEstado from "../service/ServiceAddEstado";

class ControllerAddEstado extends ServiceAddEstado {
    public callAddEstado(req: Request, res: Response) {
        const name = req.body.name;
        ServiceAddEstado.addEstado(name, res);
    }
}

const controllerAddEstado = new ControllerAddEstado();
export default controllerAddEstado;