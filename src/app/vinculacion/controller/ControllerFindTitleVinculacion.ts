import { Request, Response } from "express";
import ServiceFindTitleVinculacion from "../service/ServiceFindTitleVinculacion";


class ControllerFindTitleVinculacion extends ServiceFindTitleVinculacion {
    public callFindTitle(req: Request, res: Response) {
        const { title, codClienteConsultant } = req.body;
        ServiceFindTitleVinculacion.findTitle(title, codClienteConsultant, res);
    }
}

const controllerFindTitleVinculacion = new ControllerFindTitleVinculacion();
export default controllerFindTitleVinculacion;