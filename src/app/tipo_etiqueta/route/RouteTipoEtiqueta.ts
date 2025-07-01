import { Router } from "express";
import controllerFindAllTipoEtiqueta from "../controller/ControllerFindAllTipoEtiqueta";
import controllerAddTipoEtiqueta from "../controller/ControllerAddTipoEtiqueta";

class RouteTipoEtiqueta {
    public routeTipoEtiquetaApi: Router;

    constructor() {
        this.routeTipoEtiquetaApi = Router();
    
        this.routeTipoEtiquetaApi.get("/getall", controllerFindAllTipoEtiqueta.callFindAll);
    
        this.routeTipoEtiquetaApi.post("/add", controllerAddTipoEtiqueta.callAddTipoEtiqueta);
    }
}

const routeTipoEtiqueta = new RouteTipoEtiqueta();
export default routeTipoEtiqueta.routeTipoEtiquetaApi;