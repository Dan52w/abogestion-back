import { Router } from "express";
import controllerFindAllTipoDocumento from "../controller/ControllerFindAllTipoDocumento";
import controllerAddTipoDocumento from "../controller/ControllerAddTipoDocumento";
import controllerUpdateTipoDocumento from "../controller/ControllerUpdateTipoDocumento";
import controllerDeleteTipoDocumento from "../controller/ControllerDeleteTipoDocumento";

class RouteTipoDocumento {
    public routeTipoDocumentoApi: Router;

    constructor(){
        this.routeTipoDocumentoApi = Router();
    
        this.routeTipoDocumentoApi.get("/getall", controllerFindAllTipoDocumento.callFindAll);
    
        this.routeTipoDocumentoApi.post("/add", controllerAddTipoDocumento.callAddTipoDocumento);
        this.routeTipoDocumentoApi.put("/update", controllerUpdateTipoDocumento.callUpdateTipoDocumento);
        this.routeTipoDocumentoApi.delete("/delete/:id", controllerDeleteTipoDocumento.callDeleteTipoDocumento);
    }
}

const routeTipoDocumento = new RouteTipoDocumento();
export default routeTipoDocumento.routeTipoDocumentoApi;