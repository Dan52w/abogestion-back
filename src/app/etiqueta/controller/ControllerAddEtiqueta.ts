import { Request, Response } from "express";
import ServiceAddEtiqueta from "../service/ServiceAddEtiqueta";
import Etiqueta from "../model/Etiqueta";

class ControllerAddEtiqueta extends ServiceAddEtiqueta {
    public callAddEtiqueta(req: Request, res: Response) {
        const {nameEtiqueta, nameTEtiqueta} = req.body
        ServiceAddEtiqueta.addEtiqueta(nameEtiqueta, nameTEtiqueta, res);
    }
}

const controllerAddEtiqueta = new ControllerAddEtiqueta();
export default controllerAddEtiqueta;