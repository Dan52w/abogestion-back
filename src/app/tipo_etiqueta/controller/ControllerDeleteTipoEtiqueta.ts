import { Request, Response } from "express";
import ServiceDeleteTipoEtiqueta from "../service/ServiceDeleteTipoEtiqueta";

class ControllerDeleteTipoEtiqueta extends ServiceDeleteTipoEtiqueta {
    public callDeleteTipoEtiqueta(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteTipoEtiqueta.deleteTipoEtiqueta(id, res);
    }
}

const controllerDeleteTipoEtiqueta = new ControllerDeleteTipoEtiqueta();
export default controllerDeleteTipoEtiqueta;