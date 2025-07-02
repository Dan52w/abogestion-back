import { Router } from "express";
import controllerFindAllEtiqueta from "../controller/ControllerFindAllEtiqueta";
import controllerAddEtiqueta from "../controller/ControllerAddEtiqueta";

class RouteEtiqueta {
    public routeEtiquetaApi: Router;

    constructor() {
        this.routeEtiquetaApi = Router();
    
        this.routeEtiquetaApi.get("/getall", controllerFindAllEtiqueta.callFindAll);
    
        this.routeEtiquetaApi.post("/add", controllerAddEtiqueta.callAddEtiqueta);
    }
}

const routeEtiqueta = new RouteEtiqueta();
export default routeEtiqueta.routeEtiquetaApi;