import { Request, Response } from "express";
import ServiceFindIdEstado from "../service/ServiceFindIdEstado";

class ControllerFindIdEstado extends ServiceFindIdEstado{
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdEstado.findId(id, res);
    }
}

const controllerFindIdEstado = new ControllerFindIdEstado();
export default controllerFindIdEstado;