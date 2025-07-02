import { Router } from "express";
import controllerFindAllTipoEtiqueta from "../controller/ControllerFindAllTipoEtiqueta";
import controllerAddTipoEtiqueta from "../controller/ControllerAddTipoEtiqueta";
import controllerUpdateTipoEtiqueta from "../controller/ControllerUpdateTipoEtiqueta";
import controllerDeleteTipoEtiqueta from "../controller/ControllerDeleteTipoEtiqueta";
import controllerFindIdTipoEtiqueta from "../controller/ControllerFindIdTipoEtiqueta";
import controllerFindNameTipoEtiqueta from "../controller/ControllerFindNameTipoEtiqueta";

class RouteTipoEtiqueta {
    public routeTipoEtiquetaApi: Router;

    constructor() {
        this.routeTipoEtiquetaApi = Router();
    
        this.routeTipoEtiquetaApi.get("/getall", controllerFindAllTipoEtiqueta.callFindAll);
        this.routeTipoEtiquetaApi.get("/getid/:id", controllerFindIdTipoEtiqueta.callFindId);
        this.routeTipoEtiquetaApi.get("/getname/:name", controllerFindNameTipoEtiqueta.callFindName);
    
        this.routeTipoEtiquetaApi.post("/add", controllerAddTipoEtiqueta.callAddTipoEtiqueta);
        this.routeTipoEtiquetaApi.put("/update", controllerUpdateTipoEtiqueta.callUpdateTipoEtiqueta);
        this.routeTipoEtiquetaApi.delete("/delete/:id", controllerDeleteTipoEtiqueta.callDeleteTipoEtiqueta);
    }
}

const routeTipoEtiqueta = new RouteTipoEtiqueta();
export default routeTipoEtiqueta.routeTipoEtiquetaApi;