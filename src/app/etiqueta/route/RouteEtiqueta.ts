import { Router } from "express";
import controllerFindAllEtiqueta from "../controller/ControllerFindAllEtiqueta";
import controllerAddEtiqueta from "../controller/ControllerAddEtiqueta";
import controllerUpdateEtiqueta from "../controller/ControllerUpdateEtiqueta";
import controllerDeleteEtiqueta from "../controller/ControllerDeleteEtiqueta";
import controllerFindNameEtiqueta from "../controller/ControllerFindNameEtiqueta";
import controllerFindIdEtiqueta from "../controller/ControllerFindIdEtiqueta";

class RouteEtiqueta {
    public routeEtiquetaApi: Router;

    constructor() {
        this.routeEtiquetaApi = Router();
    
        this.routeEtiquetaApi.get("/getall", controllerFindAllEtiqueta.callFindAll);
        this.routeEtiquetaApi.get("/getname/:name", controllerFindNameEtiqueta.callFindName);
        this.routeEtiquetaApi.get("/getid/:id", controllerFindIdEtiqueta.callFindId);
    
        this.routeEtiquetaApi.post("/add", controllerAddEtiqueta.callAddEtiqueta);
        this.routeEtiquetaApi.put("/update", controllerUpdateEtiqueta.callUpdateEtiqueta);
        this.routeEtiquetaApi.delete("/delete/:id", controllerDeleteEtiqueta.callDeleteEtiqueta);
    }
}

const routeEtiqueta = new RouteEtiqueta();
export default routeEtiqueta.routeEtiquetaApi;