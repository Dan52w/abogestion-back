import { Request, Response } from "express";
import ServiceAddDocEti from "../service/ServiceAddDocEti";
import DocumentoEtiqueta from "../model/DocumentoEtiqueta";

class ControllerAddDocEti extends ServiceAddDocEti {
    public callAddDocEti(req: Request, res: Response) {
        const objDocEti = new DocumentoEtiqueta(req.body.codDocumento, req.body.codEtiqueta);
        ServiceAddDocEti.addDocEti(objDocEti, res);
    }
}

const controllerAddDocEti = new ControllerAddDocEti();
export default controllerAddDocEti;