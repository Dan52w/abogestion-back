import { Request, Response } from "express";
import ServiceAddHistCambio from "../service/ServiceAddHistCambio";
import HistorialCambio from "../model/HistorialCambio";

class ControllerAddHistCambio extends ServiceAddHistCambio {
    public callAddHistCambio(req: Request, res: Response) {
        const objHistCambio = new HistorialCambio(0, req.body.codCaso, req.body.codPersona, 
            req.body.fechaCambio, req.body.observacion);
        ServiceAddHistCambio.addHistCambio(objHistCambio, res);
    }
}

const controllerAddHistCambio = new ControllerAddHistCambio();
export default controllerAddHistCambio;