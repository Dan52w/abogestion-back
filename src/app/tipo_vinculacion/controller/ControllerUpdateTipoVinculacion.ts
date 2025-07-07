import { Request, Response } from "express";
import ServiceUpdateTipoVinculacion from "../service/ServiceUpdateTipoVinculacion";

class ControllerUpdateTipoVinculacion extends ServiceUpdateTipoVinculacion {
    public callUpdateTipoVinculacion(req: Request, res: Response) {
        const {oldName, newName} = req.body;
        ServiceUpdateTipoVinculacion.updateTipoVinculacion(oldName, newName, res);
    }
}

const controllerUpdateTipoVinculacion = new ControllerUpdateTipoVinculacion();
export default controllerUpdateTipoVinculacion;