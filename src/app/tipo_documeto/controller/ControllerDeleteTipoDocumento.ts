import { Request, Response } from "express";
import ServiceDeleteTipoDocumento from "../service/ServiceDeleteTipoDocumento";

class ControllerDeleteTipoDocumento extends ServiceDeleteTipoDocumento {
    public callDeleteTipoDocumento(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteTipoDocumento.deleteTipoDocumento(id, res);
    }
}

const controllerDeleteTipoDocumento = new ControllerDeleteTipoDocumento();
export default controllerDeleteTipoDocumento;