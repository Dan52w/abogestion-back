import { Router } from "express";
import controllerFindAllVinculacion from "../controller/ControllerFindAllVinculacion";
import controllerAddVinculacion from "../controller/ControllerAddVinculacion";
import controllerUpdateVinculacion from "../controller/ControllerUpdateVinculacion";
import controllerDeleteVinculacion from "../controller/ControllerDeleteVinculacion";

class RouteVinculacion {
    public routeVinculacionApi: Router;

    constructor() {
        this.routeVinculacionApi = Router();
    
        this.routeVinculacionApi.get("/getall", controllerFindAllVinculacion.callFindAll);
    
        this.routeVinculacionApi.post("/add", controllerAddVinculacion.callAddVinculacion);
        this.routeVinculacionApi.put("/update", controllerUpdateVinculacion.callUpdateVinculacion);
        this.routeVinculacionApi.delete("/delete", controllerDeleteVinculacion.callDeleteVinculacion);
    }
}

const routeVinculacion = new RouteVinculacion();
export default routeVinculacion.routeVinculacionApi;