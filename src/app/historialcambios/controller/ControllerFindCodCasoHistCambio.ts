import { Request, Response } from "express";
import ServiceFindCodCasoHistCambio from "../service/ServiceFindCodCasoHistCambio";

class ControllerFindCodCasoHistCambio extends ServiceFindCodCasoHistCambio {
    public callFindCodCaso(req: Request, res: Response) {
        const codCaso = Number(req.params.codCaso);
        ServiceFindCodCasoHistCambio.findCodCaso(codCaso, res);
    }
}

const controllerFindCodCasoHistCambio = new ControllerFindCodCasoHistCambio();
export default controllerFindCodCasoHistCambio;