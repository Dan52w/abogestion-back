import { Request, Response } from "express";
import ServiceUpdateTipoEtiqueta from "../service/ServiceUpdateTipoEtiqueta";

class ControllerUpdateTipoEtiqueta extends ServiceUpdateTipoEtiqueta {
    public callUpdateTipoEtiqueta(req: Request, res: Response) {
        const {oldName, newName} = req.body;
        ServiceUpdateTipoEtiqueta.updateTipoEtiqueta(oldName, newName, res);
    }
}

const controllerUpdateTipoEtiqueta = new ControllerUpdateTipoEtiqueta();
export default controllerUpdateTipoEtiqueta;