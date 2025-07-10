import { Request, Response } from "express";
import ServiceFindPersonaVinculacion from "../service/ServiceFindPersonaVinculacion";

class ControllerFindPersonaVinculacion extends ServiceFindPersonaVinculacion {
    public callFindPersona(req: Request, res: Response) {
        const { codPersona, codClienteConsultant } = req.body;
        ServiceFindPersonaVinculacion.findPersona(codPersona, codClienteConsultant, res);
    }
}

const controllerFindPersonaVinculacion = new ControllerFindPersonaVinculacion();
export default controllerFindPersonaVinculacion;