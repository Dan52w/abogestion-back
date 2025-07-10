import { Request, Response } from "express";
import ServiceFindSubTVinculacion from "../service/ServiceFindSubTVinculacion";

class ControllerFindSubTVinculacion extends ServiceFindSubTVinculacion {
    public callFindSubT(req: Request, res: Response) {
        const { subtipo, codClienteConsultant } = req.body;
        ServiceFindSubTVinculacion.findSubT(subtipo, codClienteConsultant, res);
    }
}

const controllerFindSubTVinculacion = new ControllerFindSubTVinculacion();
export default controllerFindSubTVinculacion;