import { Router } from "express";
import controllerFindAllVinculacion from "../controller/ControllerFindAllVinculacion";
import controllerAddVinculacion from "../controller/ControllerAddVinculacion";

class RouteVinculacion {
    public routeVinculacionApi: Router;

    constructor() {
        this.routeVinculacionApi = Router();
    
        this.routeVinculacionApi.get("/getall", controllerFindAllVinculacion.callFindAll);
    
        this.routeVinculacionApi.post("/add", controllerAddVinculacion.callAddVinculacion);
    }
}

const routeVinculacion = new RouteVinculacion();
export default routeVinculacion.routeVinculacionApi;