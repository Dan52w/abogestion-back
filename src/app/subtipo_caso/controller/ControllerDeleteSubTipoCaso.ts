import { Request, Response } from "express";
import ServiceDeleteSubTipoCaso from "../service/ServiceDeleteSubTipoCaso";

class ControllerDeleteSubTipoCaso extends ServiceDeleteSubTipoCaso {
    public callDeleteSubTipoCoso(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteSubTipoCaso.deleteSubTipoCaso(id, res);
    }
}

const controllerDeleteSubTipoCaso = new ControllerDeleteSubTipoCaso();
export default controllerDeleteSubTipoCaso;