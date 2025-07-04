import { Request, Response } from "express";
import ServiceFindBtwDateDocumento from "../service/ServiceFindBtwDateDocumento";

class ControllerFindBtwDocumento extends ServiceFindBtwDateDocumento {
    public callFindBtw(req: Request, res: Response) {
        const { desdeFecha , hastaFecha } = req.body;
        ServiceFindBtwDateDocumento.findBtwDate(desdeFecha, hastaFecha, res);
    }
}

const controllerFindBtwDocumento = new ControllerFindBtwDocumento();
export default controllerFindBtwDocumento;