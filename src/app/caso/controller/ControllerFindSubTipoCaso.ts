import { Request, Response } from "express";
import ServiceFindSubTipoCaso from "../service/ServiceFindSubTipoCaso";

class ControllerFindSubTipoCaso extends ServiceFindSubTipoCaso {
    public callFindSubTipo(req: Request, res: Response) {
        const subTipo = req.params.subTipo;
        ServiceFindSubTipoCaso.findSubTipo(subTipo, res);
    }
}

const controllerFindSubTipoCaso = new ControllerFindSubTipoCaso();
export default controllerFindSubTipoCaso;