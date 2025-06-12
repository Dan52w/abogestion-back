import { Router } from "express";
import controllerFindAllCliente from "../controller/ControllerFindAllCliente";

class RouteCliente {
    public routeClienteApi: Router;

    constructor() {
        this.routeClienteApi = Router();
    
        this.routeClienteApi.get("/getall", controllerFindAllCliente.callFindAllCliente);
    }
}

const routeCliente = new RouteCliente();
export default routeCliente.routeClienteApi;