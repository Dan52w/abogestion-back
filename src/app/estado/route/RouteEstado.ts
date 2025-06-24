import { Router } from "express";
import controllerFindAllEstado from "../controller/ControllerFindAllEstado";

class RouteEstado {
    public routeEstadoApi: Router;

    constructor() {
        this.routeEstadoApi = Router();
    
        this.routeEstadoApi.get("/getall", controllerFindAllEstado.callFindAll);
    }
}

const routeEstado = new RouteEstado();
export default routeEstado.routeEstadoApi;