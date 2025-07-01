import { Request, Response } from "express";
import ServiceAddTipoEtiqueta from "../service/ServiceAddTipoEtiqueta";

class ControllerAddTipoEtiqueta extends ServiceAddTipoEtiqueta {
    public callAddTipoEtiqueta(req: Request, res: Response) {
        const name = req.body.name;
        ServiceAddTipoEtiqueta.AddTipoEtiqueta(name, res);
    }
}

const controllerAddTipoEtiqueta = new ControllerAddTipoEtiqueta();
export default controllerAddTipoEtiqueta;