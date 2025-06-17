import { Request, Response } from "express";
import ServiceUpdateTipoCaso from "../service/ServiceUpdateTipoCaso";

class ControllerUpdateTipoCaso extends ServiceUpdateTipoCaso {
    public callUpdateTipoCaso(req: Request, res: Response) {
        const oldName = req.body.oldName;
        const newName = req.body.newName;
        ServiceUpdateTipoCaso.updateTipoCaso(oldName, newName, res);
    }
}

const controllerUpdateTipoCaso = new ControllerUpdateTipoCaso();
export default controllerUpdateTipoCaso;