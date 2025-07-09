import { Request, Response } from "express";
import ServiceDeleteVinculacion from "../service/ServiceDeleteVinculacion";
import Vinculacion from "../model/Vinculacion";

class ControllerDeleteVinculacion extends ServiceDeleteVinculacion {
    public callDeleteVinculacion(req: Request, res: Response) {
        const objVinculacion = new Vinculacion(req.body.codPersona, req.body.codCaso, req.body.codTipoVinculacion);
        ServiceDeleteVinculacion.deleteVinculaciones(objVinculacion, res);
    }
}

const controllerDeleteVinculacion = new ControllerDeleteVinculacion();
export default controllerDeleteVinculacion;