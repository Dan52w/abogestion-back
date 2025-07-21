import { Router } from "express";
import controllerFindAllDocumento from "../controller/ControllerFindAllDocumento";
import controllerAddDocumeto from "../controller/ControllerAddDocumento";
import upload from "../controller/upload";
import controllerDownloadDocumento from "../controller/ControllerDownloadDocumento";
import controllerFindNameDocumento from "../controller/ControllerFindNameDocumento";
import controllerFindIdDocumento from "../controller/ControllerFindIdDocumento";
import controllerUpdateDocumento from "../controller/ControllerUpdateDocumento";
import controllerDeleteDocumento from "../controller/ControllerDeleteDocumento";
import controllerFindBtwDocumento from "../controller/ControllerFindBtwDateDocumento";
import controllerFindCodCasoDocumento from "../controller/ControllerFindCodCasoDocumento";

class RouteDocumento {
    public routeDocumentoApi: Router;

    constructor() {
        this.routeDocumentoApi = Router();
    
        this.routeDocumentoApi.get("/getall", controllerFindAllDocumento.callFindAll);
        this.routeDocumentoApi.get("/getid/:id", controllerFindIdDocumento.callFindId);
        this.routeDocumentoApi.get("/getdate", controllerFindBtwDocumento.callFindBtw);
        this.routeDocumentoApi.get("/getname/:name", controllerFindNameDocumento.callFindName);
        this.routeDocumentoApi.get("/getcodcaso/:codCaso", controllerFindCodCasoDocumento.callFindCodCaso);
        this.routeDocumentoApi.get("/download/:id", controllerDownloadDocumento.callDownloadDocumento);
    
        this.routeDocumentoApi.post("/add", upload.single("file"), controllerAddDocumeto.callAddDocuemnto);
        this.routeDocumentoApi.put("/update", controllerUpdateDocumento.callUpdateDocumento);
        this.routeDocumentoApi.delete("/delete/:id", controllerDeleteDocumento.callDeleteDocumento);
    }
}

const routeDocumento = new RouteDocumento();
export default routeDocumento.routeDocumentoApi;