import { Request, Response } from "express";
import ServiceDeleteTipoCaso from "../service/ServiceDeleteTipoCaso";

class ControllerDeleteTipoCaso extends ServiceDeleteTipoCaso {
    public callDeleteTipoCaso(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteTipoCaso.deleteTipoCaso(id, res);
    }
}

const controllerDeleteTipoCaso = new ControllerDeleteTipoCaso();
export default controllerDeleteTipoCaso;