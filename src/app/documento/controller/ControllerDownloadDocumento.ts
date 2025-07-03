import { Request, Response } from "express";
import ServiceDownloadDocumento from "../service/ServiceDownloadDocumento";

class ControllerDownloadDocumento extends ServiceDownloadDocumento {
    public callDownloadDocumento(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDownloadDocumento.downloadDocumento(id, res);
    }
}

const controllerDownloadDocumento = new ControllerDownloadDocumento();
export default controllerDownloadDocumento;