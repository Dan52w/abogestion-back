import { Request, Response } from "express";
import ServiceFindEquipoNamePersona from "../service/ServiceFindEquipoPersona";

class ControllerFindEquipoNamePersona extends ServiceFindEquipoNamePersona {
    public callFindEquipo(req: Request, res: Response) {
        const { nameCliente, name } = req.params;
        return ServiceFindEquipoNamePersona.findEquipo(nameCliente, name, res);
    }
}

const controllerFindEquipoNamePersona = new ControllerFindEquipoNamePersona();
export default controllerFindEquipoNamePersona;