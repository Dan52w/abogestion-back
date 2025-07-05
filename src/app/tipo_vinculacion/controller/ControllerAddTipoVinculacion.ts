import { Request, Response } from "express";
import ServiceAddTipoVinculacion from "../service/ServiceAddTipoVinculacion";

class ControllerAddTipoVinculacion extends ServiceAddTipoVinculacion {
    public callAddTipoVinculacion(req: Request, res: Response) {
        const name = req.body.name;
        ServiceAddTipoVinculacion.addTipoVinculacion(name, res);
    }
}

const controllerAddTipoVinculacion = new ControllerAddTipoVinculacion();
export default controllerAddTipoVinculacion;