import { Router } from "express";
import controllerFindAllCliente from "../controller/ControllerFindAllCliente";
import controllerAddCliente from "../controller/ControllerAddCliente";
import controllerFindIdCliente from "../controller/ControllerFindIdCliente";

class RouteCliente {
    public routeClienteApi: Router;

    constructor() {
        this.routeClienteApi = Router();
    
        this.routeClienteApi.get("/getall", controllerFindAllCliente.callFindAllCliente);
        this.routeClienteApi.get("/getid/:id", controllerFindIdCliente.callFindIdCliente);
    
        this.routeClienteApi.post("/add", controllerAddCliente.callAddCliente);
    }
}

const routeCliente = new RouteCliente();
export default routeCliente.routeClienteApi;