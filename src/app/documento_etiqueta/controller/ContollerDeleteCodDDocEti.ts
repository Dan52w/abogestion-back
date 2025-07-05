import { Request, Response } from "express";
import ServiceDeleteCodDDocEti from "../service/ServiceDeleteCodDDocEti";

class ControllerDeleteCodDDocEti extends ServiceDeleteCodDDocEti {
    public callDeleteCodDocEti(req: Request, res: Response) {
        const codDocumento = Number(req.params.codDocumento);
        ServiceDeleteCodDDocEti.deleteCodDocEti(codDocumento, res);
    }
}

const controllerDeleteCodDDocEti = new ControllerDeleteCodDDocEti();
export default controllerDeleteCodDDocEti;