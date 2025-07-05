import { Request, Response } from "express";
import ServiceDeleteDocEti from "../service/ServiceDeleteDocEti";
import DocumentoEtiqueta from "../model/DocumentoEtiqueta";

class ControllerDeleteDocEti extends ServiceDeleteDocEti {
    public callDeleteDocEti(req: Request, res: Response) {
        const objDocEti = new DocumentoEtiqueta(req.body.codDocumento, req.body.codEtiqueta);
        ServiceDeleteDocEti.deleteDocEti(objDocEti, res);
    }
}

const controllerDeleteDocEti = new ControllerDeleteDocEti();
export default controllerDeleteDocEti;