import { Router } from "express";
import controllerFindAllCliente from "../controller/ControllerFindAllCliente";
import controllerAddCliente from "../controller/ControllerAddCliente";

class RouteCliente {
    public routeClienteApi: Router;

    constructor() {
        this.routeClienteApi = Router();
    
        this.routeClienteApi.get("/getall", controllerFindAllCliente.callFindAllCliente);
    
        this.routeClienteApi.post("/add", controllerAddCliente.callAddCliente);
    }
}

const routeCliente = new RouteCliente();
export default routeCliente.routeClienteApi;