import { Request, Response } from "express";
import ServiceFindNameTipoEtiqueta from "../service/ServiceFindNameTipoEtiqueta";

class ControllerFindNameTipoEtiqueta extends ServiceFindNameTipoEtiqueta {
    public callFindName(req: Request, res: Response) {
        const name = req.body.name;
        ServiceFindNameTipoEtiqueta.findName(name, res);
    }
}

const controllerFindNameTipoEtiqueta = new ControllerFindNameTipoEtiqueta();
export default controllerFindNameTipoEtiqueta;