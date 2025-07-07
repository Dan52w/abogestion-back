import { Request, Response } from "express";
import ServiceUpdateCaso from "../service/ServiceUpdateCaso";
import Caso from "../model/Caso";

class ControllerUpdateCaso extends ServiceUpdateCaso {
    public callUpdateCaso(req: Request, res: Response) {
        const objCaso = new Caso(req.body.id, req.body.titulo, req.body.descripcion, req.body.estado,
            req.body.fechaInicio, req.body.cliente, req.body.firma, req.body.codSubtipoCaso, req.body.codCasoPadre);
        ServiceUpdateCaso.updateCaso(objCaso, res);
    } 
}

const controllerUpdateCaso = new ControllerUpdateCaso();
export default controllerUpdateCaso;