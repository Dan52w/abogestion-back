import { Router } from "express";
import controllerFindAllDocumento from "../controller/ControllerFindAllDocumento";
import controllerAddDocumeto from "../controller/ControllerAddDocumento";
import upload from "../controller/upload";
import controllerDownloadDocumento from "../controller/ControllerDownloadDocumento";

class RouteDocumento {
    public routeDocumentoApi: Router;

    constructor() {
        this.routeDocumentoApi = Router();
    
        this.routeDocumentoApi.get("/getall", controllerFindAllDocumento.callFindAll);
        this.routeDocumentoApi.get("/download/:id", controllerDownloadDocumento.callDownloadDocumento);
    
        this.routeDocumentoApi.post("/add", upload.single("file"), controllerAddDocumeto.callAddDocuemnto);
    }
}

const routeDocumento = new RouteDocumento();
export default routeDocumento.routeDocumentoApi;