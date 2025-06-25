import { Request, Response } from "express";
import ServiceAddCaso from "../service/ServiceAddCaso";
import Caso from "../model/Caso";

class ControllerAddCaso extends ServiceAddCaso {
    public callAddCaso(req: Request, res: Response) {
        const objCaso = new Caso(0, req.body.titulo, req.body.descripcion, req.body.estado,
            req.body.fechaInicio, req.body.codSubtipoCaso, req.body.codCasoPadre);
        ServiceAddCaso.AddCaso(objCaso, res);
    }
}

const controllerAddCaso = new ControllerAddCaso();
export default controllerAddCaso;