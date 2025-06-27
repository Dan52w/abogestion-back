import { Request, Response } from "express";
import ServiceFindTipoCaso from "../service/ServiceFindTipoCaso";

class ControllerFindTipoCaso extends ServiceFindTipoCaso {
    public callFindTipo(req: Request, res: Response) {
        const tipo = req.params.type;
        ServiceFindTipoCaso.findTipo(tipo, res);
    }
}

const controllerFindTipoCaso = new ControllerFindTipoCaso();
export default controllerFindTipoCaso;