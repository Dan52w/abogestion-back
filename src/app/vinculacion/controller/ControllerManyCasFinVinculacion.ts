import { Request, Response } from "express";
import ServiceManyCasFinVinculacion from "../service/ServiceManyCasFinVinculacion";

class ControllerManyCasFinVinculacion extends ServiceManyCasFinVinculacion {
    public callManyCasFin(req: Request, res: Response) {
        const codPersona = Number(req.params.codPersona);
        ServiceManyCasFinVinculacion.manyCasFin(codPersona, res);
    }
}

const controllerManyCasFinVinculacion = new ControllerManyCasFinVinculacion();
export default controllerManyCasFinVinculacion;