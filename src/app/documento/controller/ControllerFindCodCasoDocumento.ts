import { Request, Response } from "express";
import ServiceFindCodCasoDocumento from "../service/ServiceFindCodCasoDocumento";

class ControllerFindCodCasoDocumento extends ServiceFindCodCasoDocumento {
    public callFindCodCaso(req: Request, res: Response) {
        const codCaso = Number(req.params.codCaso);
        ServiceFindCodCasoDocumento.findCodCaso(codCaso, res);
    }
}

const controllerFindCodCasoDocumento = new ControllerFindCodCasoDocumento();
export default controllerFindCodCasoDocumento;