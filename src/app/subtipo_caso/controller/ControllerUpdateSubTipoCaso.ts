import { Request, Response } from "express";
import ServiceUpdateSubTipoCaso from "../service/ServiceUpdateSubTipoCaso";
import SubTipoCaso from "../model/SubTipoCaso";

class ControllerUpdateSubTipoCaso extends ServiceUpdateSubTipoCaso {
    public callUpdateSubTipoCaso(req: Request, res: Response) {
        const objSubTCaso = new SubTipoCaso(req.body.id, req.body.nombre, req.body.codTipoCaso);
        ServiceUpdateSubTipoCaso.updateSubtipoCaso(objSubTCaso, res);
    }
}

const controllerUpdateSubTipoCaso = new ControllerUpdateSubTipoCaso();
export default controllerUpdateSubTipoCaso;