import { Request, Response } from "express";
import ServiceManyCasActVinculacion from "../service/ServiceManyCasActVinculacion";

class ControllerManyCasActVinculacion extends ServiceManyCasActVinculacion {
    public callManyCasAct(req: Request, res: Response) {
        const codPersona = Number(req.params.codPersona);
        ServiceManyCasActVinculacion.manyCasAct(codPersona, res);
    }
}

const controllerManyCasActVinculacion = new ControllerManyCasActVinculacion();
export default controllerManyCasActVinculacion;