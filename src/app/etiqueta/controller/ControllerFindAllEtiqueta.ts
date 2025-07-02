import { Request, Response } from "express";
import ServiceFindAllEtiqueta from "../service/ServiceFindAllEtiqueta";

class ControllerFindAllEtiqueta extends ServiceFindAllEtiqueta {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllEtiqueta.findAll(res);
    }
}

const controllerFindAllEtiqueta = new ControllerFindAllEtiqueta();
export default controllerFindAllEtiqueta;