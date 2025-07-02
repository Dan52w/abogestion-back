import { Request, Response } from "express";
import ServiceFindNameEtiqueta from "../service/ServiceFindNameEtiqueta";

class ControllerFindNameEtiqueta extends ServiceFindNameEtiqueta {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameEtiqueta.findName(name, res);
    }
}

const controllerFindNameEtiqueta = new ControllerFindNameEtiqueta();
export default controllerFindNameEtiqueta;