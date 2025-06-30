import { Router } from "express";
import controllerFindAllTipoDocumento from "../controller/ControllerFindAllTipoDocumento";
import controllerAddTipoDocumento from "../controller/ControllerAddTipoDocumento";
import controllerUpdateTipoDocumento from "../controller/ControllerUpdateTipoDocumento";

class RouteTipoDocumento {
    public routeTipoDocumentoApi: Router;

    constructor(){
        this.routeTipoDocumentoApi = Router();
    
        this.routeTipoDocumentoApi.get("/getall", controllerFindAllTipoDocumento.callFindAll);
    
        this.routeTipoDocumentoApi.post("/add", controllerAddTipoDocumento.callAddTipoDocumento);
        this.routeTipoDocumentoApi.put("/update", controllerUpdateTipoDocumento.callUpdateTipoDocumento);
    }
}

const routeTipoDocumento = new RouteTipoDocumento();
export default routeTipoDocumento.routeTipoDocumentoApi;