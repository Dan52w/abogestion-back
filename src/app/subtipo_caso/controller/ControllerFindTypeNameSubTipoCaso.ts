import { Request, Response } from "express";
import ServiceFindTypeNameSubTipoCaso from "../service/ServiceFindTypeNameSubTipoCaso";

class ControllerFindTypeNameSubTipoCaso extends ServiceFindTypeNameSubTipoCaso {
    public callFindTypeName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindTypeNameSubTipoCaso.findTypeName(name, res)
    }
}

const controllerFindTypeNameSubTipoCaso = new ControllerFindTypeNameSubTipoCaso();
export default controllerFindTypeNameSubTipoCaso;