import { Request, Response } from "express";
import ServiceFindEquipoPersona from "../service/ServiceFindEqupoPersona";

class ControllerFindEquipoPersona extends ServiceFindEquipoPersona {
    public callFindEquipo(req: Request, res: Response) {
        const { nameCliente} = req.params;
        return ServiceFindEquipoPersona.findEquipo(nameCliente, res);
    }
}