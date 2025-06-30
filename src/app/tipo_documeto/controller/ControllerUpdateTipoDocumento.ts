import { Request, Response } from "express";
import ServiceUpdateTipoDocumento from "../service/ServiceUpdateTipoDocumento";
import TipoDocumento from "../model/TipoDocumento";

class ControllerUpdateTipoDocumento extends ServiceUpdateTipoDocumento{
    public callUpdateTipoDocumento(req: Request, res: Response) {
        const objTipoDocumento = new TipoDocumento(req.body.id,
            req.body.nombre, req.body.descripcion);
        ServiceUpdateTipoDocumento.updateTipoDocumento(objTipoDocumento, res);
    }
}

const controllerUpdateTipoDocumento = new ControllerUpdateTipoDocumento();
export default controllerUpdateTipoDocumento;