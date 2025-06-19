import { Request, Response } from "express";
import ServiceFindNameSubTipoCaso from "../service/ServiceFindNameSubTipoCaso";

class ControllerFindNameSubTbTipoCaso extends ServiceFindNameSubTipoCaso {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameSubTipoCaso.findName(name, res);
    }
}

const controllerFindNameSubTipoCaso = new ControllerFindNameSubTbTipoCaso();
export default controllerFindNameSubTipoCaso;