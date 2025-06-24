import { Request, Response } from "express";
import ServiceFindNameEstado from "../service/ServiceFindNameEstado";

class ControllerFindNameEstado extends ServiceFindNameEstado {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameEstado.findName(name, res);
    }
}

const controllerFindNameEstado = new ControllerFindNameEstado();
export default controllerFindNameEstado;