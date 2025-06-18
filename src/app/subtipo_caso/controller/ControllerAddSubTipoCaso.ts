import { Request, Response } from "express";
import ServiceAddSubTipoCaso from "../service/ServiceAddSubTipoCaso";

class ControllerAddSubTipoCaso extends ServiceAddSubTipoCaso {
    public callAddSubTipoCaso(req: Request, res: Response) {
        const { name, nameTipoCaso } = req.body;
        ServiceAddSubTipoCaso.addSubTipoCaso(name, nameTipoCaso, res);
    }
}

const controllerAddSubTipoCaso = new ControllerAddSubTipoCaso();
export default controllerAddSubTipoCaso;