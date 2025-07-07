import { Request, Response } from "express";
import ServiceFindIdTipoVinculacion from "../service/ServiceFindIdTipoVinculacion";

class ControllerFindIdTipoVinculacion extends ServiceFindIdTipoVinculacion {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdTipoVinculacion.findId(id, res);
    }
}

const controllerFindIdTipoVinculacion = new ControllerFindIdTipoVinculacion();
export default controllerFindIdTipoVinculacion;