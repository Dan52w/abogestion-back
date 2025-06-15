import { Request, Response } from "express";
import ServiceFindCcPersona from "../service/ServiceFindCcPersona";

class ControllerFindCcPersona extends ServiceFindCcPersona {
    public callFindCc(req: Request, res: Response) {
        const cc = req.params.cc;
        ServiceFindCcPersona.findCc(cc, res);
    }
}

const controllerFindCcPersona = new ControllerFindCcPersona();
export default controllerFindCcPersona;