import { Request, Response } from "express";
import ServiceDeleteEtiqueta from "../service/ServiceDeleteEtiqueta";

class ControllerDeleteEtiqueta extends ServiceDeleteEtiqueta {
    public callDeleteEtiqueta(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteEtiqueta.deleteEtiqueta(id, res);
    }
}

const controllerDeleteEtiqueta = new ControllerDeleteEtiqueta();
export default controllerDeleteEtiqueta;