import { Request, Response } from "express";
import ServiceUpdateVinculacion from "../service/ServiceUpdateVinculacion";
import Vinculacion from "../model/Vinculacion";

class ControllerUpdateVinculacion extends ServiceUpdateVinculacion {
    public callUpdateVinculacion(req: Request, res: Response) {
        const objVinculacion = new Vinculacion(req.body.codPersona, req.body.codCaso, req.body.codTipoVinculacion);
        ServiceUpdateVinculacion.updateVinculacion(objVinculacion, res);
    }
}

const controllerUpdateVinculacion = new ControllerUpdateVinculacion();
export default controllerUpdateVinculacion;