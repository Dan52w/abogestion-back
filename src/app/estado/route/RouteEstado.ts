import { Router } from "express";
import controllerFindAllEstado from "../controller/ControllerFindAllEstado";
import controllerAddEstado from "../controller/ControllerAddEstado";

class RouteEstado {
    public routeEstadoApi: Router;

    constructor() {
        this.routeEstadoApi = Router();
    
        this.routeEstadoApi.get("/getall", controllerFindAllEstado.callFindAll);
    
        this.routeEstadoApi.post("/add", controllerAddEstado.callAddEstado);
    }
}

const routeEstado = new RouteEstado();
export default routeEstado.routeEstadoApi;