import { Request, Response } from "express";
import ServiceFindAllEstado from "../service/ServiceFindAllEstado";

class ControllerFindAllEstado extends ServiceFindAllEstado {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllEstado.findAll(res);
    }
}

const controllerFindAllEstado = new ControllerFindAllEstado();
export default controllerFindAllEstado;