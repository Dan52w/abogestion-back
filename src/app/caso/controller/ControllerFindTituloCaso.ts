import { Request, Response } from "express";
import ServiceFindTituloCaso from "../service/ServiceFindTituloCaso";

class ControllerFindTituloCaso extends ServiceFindTituloCaso {
    public callFindTitulo(req: Request, res: Response) {
        const titulo = req.params.title
        ServiceFindTituloCaso.findTitulo(titulo, res);
    }
}

const controllerFindTituloCaso = new ControllerFindTituloCaso();
export default controllerFindTituloCaso;