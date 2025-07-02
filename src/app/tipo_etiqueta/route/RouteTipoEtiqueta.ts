import { Router } from "express";
import controllerFindAllTipoEtiqueta from "../controller/ControllerFindAllTipoEtiqueta";
import controllerAddTipoEtiqueta from "../controller/ControllerAddTipoEtiqueta";
import controllerUpdateTipoEtiqueta from "../controller/ControllerUpdateTipoEtiqueta";
import controllerDeleteTipoEtiqueta from "../controller/ControllerDeleteTipoEtiqueta";

class RouteTipoEtiqueta {
    public routeTipoEtiquetaApi: Router;

    constructor() {
        this.routeTipoEtiquetaApi = Router();
    
        this.routeTipoEtiquetaApi.get("/getall", controllerFindAllTipoEtiqueta.callFindAll);
    
        this.routeTipoEtiquetaApi.post("/add", controllerAddTipoEtiqueta.callAddTipoEtiqueta);
        this.routeTipoEtiquetaApi.put("/update", controllerUpdateTipoEtiqueta.callUpdateTipoEtiqueta);
        this.routeTipoEtiquetaApi.delete("/delete/:id", controllerDeleteTipoEtiqueta.callDeleteTipoEtiqueta);
    }
}

const routeTipoEtiqueta = new RouteTipoEtiqueta();
export default routeTipoEtiqueta.routeTipoEtiquetaApi;