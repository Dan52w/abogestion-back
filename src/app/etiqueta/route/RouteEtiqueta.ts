import { Router } from "express";
import controllerFindAllEtiqueta from "../controller/ControllerFindAllEtiqueta";

class RouteEtiqueta {
    public routeEtiquetaApi: Router;

    constructor() {
        this.routeEtiquetaApi = Router();
    
        this.routeEtiquetaApi.get("/getall", controllerFindAllEtiqueta.callFindAll);
    }
}

const routeEtiqueta = new RouteEtiqueta();
export default routeEtiqueta.routeEtiquetaApi;