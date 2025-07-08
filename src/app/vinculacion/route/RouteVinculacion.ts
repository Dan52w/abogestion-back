import { Router } from "express";
import controllerFindAllVinculacion from "../controller/ControllerFindAllVinculacion";

class RouteVinculacion {
    public routeVinculacionApi: Router;

    constructor() {
        this.routeVinculacionApi = Router();
    
        this.routeVinculacionApi.get("/getall", controllerFindAllVinculacion.callFindAll);
    }
}

const routeVinculacion = new RouteVinculacion();
export default routeVinculacion.routeVinculacionApi;