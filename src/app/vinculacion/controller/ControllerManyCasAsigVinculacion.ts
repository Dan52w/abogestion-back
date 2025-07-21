import { Request, Response } from "express";
import ServiceManyCasAsigVinculacion from "../service/ServiceManyCasAsigVinculacion";

class ControllerManyCasAsigVinculacion extends ServiceManyCasAsigVinculacion {
    public callManyCasAsig(req: Request, res: Response) {
        const codPersona = Number(req.params.codPersona);
        ServiceManyCasAsigVinculacion.manyCasAsig(codPersona, res);
    }
}

const controllerManyCasAsigVinculacion = new ControllerManyCasAsigVinculacion();
export default controllerManyCasAsigVinculacion;