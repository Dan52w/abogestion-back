import { Request, Response } from "express";
import ServiceFindCodEDocEti from "../service/ServiceFindCodEDocEti";

class ControllerFindCodEDocEti extends ServiceFindCodEDocEti {
    public callFindCodE(req: Request, res: Response) {
        const codEtiquetas: number[] = req.body.codEtiquetas;
        ServiceFindCodEDocEti.findCodE(codEtiquetas, res);
    }
}

const controllerFindCodEDocEti = new ControllerFindCodEDocEti();
export default controllerFindCodEDocEti;