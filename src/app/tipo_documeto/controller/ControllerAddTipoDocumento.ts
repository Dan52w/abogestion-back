import { Request, Response } from "express";
import ServiceAddTipoDocumento from "../service/ServiceAddTipoDocumento";

class ControllerAddTipoDocumento extends ServiceAddTipoDocumento {
    public callAddTipoDocumento(req: Request, res: Response) {
        const name = req.body.name;
        const descripcion = req.body.descripcion;
        ServiceAddTipoDocumento.addTipoDocumento(name, descripcion, res);
    }
}

const controllerAddTipoDocumento = new ControllerAddTipoDocumento();
export default controllerAddTipoDocumento;