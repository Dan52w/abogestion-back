import { Request, Response } from "express";
import ServiceFindBtwDatePersona from "../service/ServiceFindBtwDatePersona";

class ControllerFindBtwDatePersona extends ServiceFindBtwDatePersona {
    public callFindBtwDate(req: Request, res: Response) {
        const oneFecha = req.body.oneFecha;
        const twoFecha = req.body.twoFecha;
        ServiceFindBtwDatePersona.findBtwDate(oneFecha, twoFecha, res);
    }
}

const controllerFindBtwDatePersona = new ControllerFindBtwDatePersona();
export default controllerFindBtwDatePersona;