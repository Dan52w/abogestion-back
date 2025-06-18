import { Request, Response } from "express";
import ServiceFindAllSubTipoCaso from "../service/ServiceFindAllSubTipoCaso";

class ControllerFindAllSubTipoCaso extends ServiceFindAllSubTipoCaso {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllSubTipoCaso.findAll(res);
    }
}

const controllerFindAllSubTipoCaso = new ControllerFindAllSubTipoCaso();
export default controllerFindAllSubTipoCaso;