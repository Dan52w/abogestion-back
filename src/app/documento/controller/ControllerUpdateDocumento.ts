import { Request, Response } from "express";
import ServiceUpdateDocumento from "../service/ServiceUpdateDocumento";
import Documento from "../model/Documento";

class ControllerUpdateDocumento extends ServiceUpdateDocumento {
    public callUpdateDocumento(req: Request, res: Response) {
        const objDocumento = new Documento(req.body.id, req.body.codCaso, 
            req.body.tipoDocumento, req.body.nombre, "", req.body.fechaSubida);
        ServiceUpdateDocumento.updateDocumento(objDocumento, res)
    }
}

const controllerUpdateDocumento = new ControllerUpdateDocumento();
export default controllerUpdateDocumento;