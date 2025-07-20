import { Request, Response } from "express";
import ServiceFindPersonaVinculacion from "../service/ServiceFindPersonaVinculacion";

class ControllerFindPersonaVinculacion extends ServiceFindPersonaVinculacion {
    public callFindPersona(req: Request, res: Response) {
        const codPersona = Number(req.params.codPersona);
        const codClienteConsultant = Number(req.params.codClienteConsultant);
        ServiceFindPersonaVinculacion.findPersona(codPersona, codClienteConsultant, res);
    }
}

const controllerFindPersonaVinculacion = new ControllerFindPersonaVinculacion();
export default controllerFindPersonaVinculacion;