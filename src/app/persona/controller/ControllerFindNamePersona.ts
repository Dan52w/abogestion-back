import { Request, Response } from "express";
import ServiceFindNamePersona from "../service/ServiceFindNamePersona";

class ControllerFindNamePersona extends ServiceFindNamePersona {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNamePersona.findName(name, res);
    }
}

const controllerFindNamePersona = new ControllerFindNamePersona();
export default controllerFindNamePersona;