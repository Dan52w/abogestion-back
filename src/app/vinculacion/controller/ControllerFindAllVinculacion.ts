import { Request, Response } from "express";
import ServiceFindAllVinculacion from "../service/ServiceFindAllVinculacion";

class ControllerFindAllVinculacion extends ServiceFindAllVinculacion {
    public callFindAll(req: Request, res: Response) {
        const codClienteConsultant = req.body.codClienteConsultant;
        ServiceFindAllVinculacion.findAll(codClienteConsultant, res)
    }
}

const controllerFindAllVinculacion = new ControllerFindAllVinculacion();
export default controllerFindAllVinculacion;