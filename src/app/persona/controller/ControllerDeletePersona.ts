import { Request, Response } from "express";
import ServiceDeletePersona from "../service/ServiceDeletePersona";

class ControllerDeletePersona extends ServiceDeletePersona {
    public callDeletePersona(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeletePersona.deletePersona(id, res);
    }
}

const controllerDeletePersona = new ControllerDeletePersona();
export default controllerDeletePersona;