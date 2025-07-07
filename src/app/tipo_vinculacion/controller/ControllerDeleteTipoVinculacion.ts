import { Request, Response } from "express";
import ServiceDeleteTipoVinculacion from "../service/ServiceDeleteTipoVinculacion";

class ControllerDeleteTipoVinculacion extends ServiceDeleteTipoVinculacion {
    public callDeleteTipoVinculacion(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteTipoVinculacion.deleteTipoVinculacion(id, res);
    }
}

const controllerDeleteTipoVinculacion = new ControllerDeleteTipoVinculacion();
export default controllerDeleteTipoVinculacion;