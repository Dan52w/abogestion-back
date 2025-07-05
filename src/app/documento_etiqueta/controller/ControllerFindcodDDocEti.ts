import { Request, Response } from "express";
import ServiceFindCodDDocEti from "../service/ServiceFindCodDDocEti";

class ControllerFindCodDDocEti extends ServiceFindCodDDocEti {
    public callFindCodD(req: Request, res: Response) {
        const codDocumento = Number(req.params.codDocumento);
        ServiceFindCodDDocEti.findCodD(codDocumento, res);
    }
}

const controllerFindCodDDocEti = new ControllerFindCodDDocEti();
export default controllerFindCodDDocEti;