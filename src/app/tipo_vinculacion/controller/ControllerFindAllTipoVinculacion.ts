import { Request, Response } from "express";
import ServiceFindAllTipoVinculacion from "../service/ServiceFindAllTipoVinculacion";

class ControllerFindAllTipoVinculacion extends ServiceFindAllTipoVinculacion {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllTipoVinculacion.findAll(res);
    }
}

const controllerFindAllTipoVinculacion = new ControllerFindAllTipoVinculacion();
export default controllerFindAllTipoVinculacion;