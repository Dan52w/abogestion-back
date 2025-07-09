import { Request, Response } from "express";
import ServiceAddVinculacion from "../service/ServiceAddVinculacion";
import Vinculacion from "../model/Vinculacion";

class ControllerAddVinculacion extends ServiceAddVinculacion {
    public callAddVinculacion(req: Request, res: Response) {
        const objVinculacion = new Vinculacion(req.body.codPersona, req.body.codCaso, req.body.codTipoVinculacion);
        ServiceAddVinculacion.addVinculacion(objVinculacion, res);
    }
}

const controllerAddVinculacion = new ControllerAddVinculacion();
export default controllerAddVinculacion;