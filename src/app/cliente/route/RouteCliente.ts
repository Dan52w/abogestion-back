import { Router } from "express";
import controllerFindAllCliente from "../controller/ControllerFindAllCliente";
import controllerAddCliente from "../controller/ControllerAddCliente";
import controllerFindIdCliente from "../controller/ControllerFindIdCliente";
import controllerUpdateCliente from "../controller/ControllerUpdateCliente";
import controllerDeleteCliente from "../controller/ControllerDeleteCliente";
import controllerFindNameCliente from "../controller/ControllerFindNameCliente";
import controllerFindNitCliente from "../controller/ControllerFindNitCliente";

class RouteCliente {
    public routeClienteApi: Router;

    constructor() {
        this.routeClienteApi = Router();
    
        this.routeClienteApi.get("/getall", controllerFindAllCliente.callFindAllCliente);
        this.routeClienteApi.get("/getid/:id", controllerFindIdCliente.callFindIdCliente);
        this.routeClienteApi.get("/getname/:name", controllerFindNameCliente.callFindName);
        this.routeClienteApi.get("/getnit/:nit_cc", controllerFindNitCliente.callFindNit);
    
        this.routeClienteApi.post("/add", controllerAddCliente.callAddCliente);
        this.routeClienteApi.put("/update", controllerUpdateCliente.callUpdateCliente);
        this.routeClienteApi.delete("/delete/:id", controllerDeleteCliente.callDeleteCliente);
    }
}

const routeCliente = new RouteCliente();
export default routeCliente.routeClienteApi;