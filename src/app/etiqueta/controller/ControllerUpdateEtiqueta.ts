import { Request, Response } from "express";
import ServiceUpdateEtiqueta from "../service/ServiceUpdateEtiqueta";
import Etiqueta from "../model/Etiqueta";

class ControllerUpdateEtiqueta extends ServiceUpdateEtiqueta {
    public callUpdateEtiqueta(req: Request, res: Response) {
        const objEtiqueta = new Etiqueta(req.body.id, req.body.nombre, req.body.codTipoEtiqueta);
        ServiceUpdateEtiqueta.updateEtiqueta(objEtiqueta, res);
    }
}

const controllerUpdateEtiqueta = new ControllerUpdateEtiqueta();
export default controllerUpdateEtiqueta;