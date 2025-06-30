import { Router } from "express";
import controllerFindAllTipoDocumento from "../controller/ControllerFindAllTipoDocumento";
import controllerAddTipoDocumento from "../controller/ControllerAddTipoDocumento";

class RouteTipoDocumento {
    public routeTipoDocumentoApi: Router;

    constructor(){
        this.routeTipoDocumentoApi = Router();
    
        this.routeTipoDocumentoApi.get("/getall", controllerFindAllTipoDocumento.callFindAll);
    
        this.routeTipoDocumentoApi.post("/add", controllerAddTipoDocumento.callAddTipoDocumento);
    }
}

const routeTipoDocumento = new RouteTipoDocumento();
export default routeTipoDocumento.routeTipoDocumentoApi;