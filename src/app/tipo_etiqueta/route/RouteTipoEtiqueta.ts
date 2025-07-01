import { Router } from "express";
import controllerFindAllTipoEtiqueta from "../controller/ControllerFindAllTipoEtiqueta";

class RouteTipoEtiqueta {
    public routeTipoEtiquetaApi: Router;

    constructor() {
        this.routeTipoEtiquetaApi = Router();
    
        this.routeTipoEtiquetaApi.get("/getall", controllerFindAllTipoEtiqueta.callFindAll);
    }
}

const routeTipoEtiqueta = new RouteTipoEtiqueta();
export default routeTipoEtiqueta.routeTipoEtiquetaApi;