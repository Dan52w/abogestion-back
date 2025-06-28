import { Router } from "express";
import controllerFindAllTipoDocumento from "../controller/ControllerFindAllTipoDocumento";

class RouteTipoDocumento {
    public routeTipoDocumentoApi: Router;

    constructor(){
        this.routeTipoDocumentoApi = Router();
    
        this.routeTipoDocumentoApi.get("/getall", controllerFindAllTipoDocumento.callFindAll);
    }
}

const routeTipoDocumento = new RouteTipoDocumento();
export default routeTipoDocumento.routeTipoDocumentoApi;