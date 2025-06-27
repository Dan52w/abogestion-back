import { Request, Response } from "express";
import ServiceFindEstadoCaso from "../service/ServiceFindEstadoCaso";

class ControllerFindEstadoCaso extends ServiceFindEstadoCaso{
    public callFindEstado(req: Request, res: Response) {
        const estado = req.params.estado;
        ServiceFindEstadoCaso.findEstado(estado, res);
    }
}

const controllerFindEstadoCaso = new ControllerFindEstadoCaso();
export default controllerFindEstadoCaso;