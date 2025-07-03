import { Request, Response } from "express";
import ServiceAddDocumento from "../service/ServiceAddDocumento";
import Documento from "../model/Documento";

class ControllerAddDocumeto extends ServiceAddDocumento {
    public callAddDocuemnto(req: Request, res: Response) {
        let objDocumento = new Documento(0, req.body.codCaso, req.body.tipoDocumento, 
            req.body.nombre, "Sin Definir", req.body.fechaSubida);
    
        if(req.file){
            let url = `./src/external_files/pdf/${req.file.filename}`.replace(/\s+/g, "-");
            objDocumento.url = url;
        }
    
        ServiceAddDocumento.addDocuemtno(objDocumento, res);
    }
}

const controllerAddDocumeto = new ControllerAddDocumeto();
export default controllerAddDocumeto;