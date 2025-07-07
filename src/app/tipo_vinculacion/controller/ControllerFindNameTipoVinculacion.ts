import { Request, Response } from "express";
import ServiceFindNameTipoVinculacion from "../service/ServiceFindNameTipoVinculacion";

class ControllerFindNameTipoVinculacion extends ServiceFindNameTipoVinculacion {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameTipoVinculacion.findName(name, res);
    }
}

const controllerFindNameTipoVinculacion = new ControllerFindNameTipoVinculacion();
export default controllerFindNameTipoVinculacion;