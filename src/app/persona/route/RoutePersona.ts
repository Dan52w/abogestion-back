import { Router } from "express";
import controllerFindAllPersona from "../controller/ControllerFindAllPersona";
import controllerAddPersona from "../controller/ControllerAddPersona";
import controllerUpdatePersona from "../controller/ControllerUpdatePersona";
import controllerFindNamePersona from "../controller/ControllerFindNamePersona";
import controllerDeleteCliente from "../../cliente/controller/ControllerDeleteCliente";

class RoutePersona {
    public routePersonaApi: Router;

    constructor() {
        this.routePersonaApi = Router();
    
        this.routePersonaApi.get("/getall", controllerFindAllPersona.callFindAll);
        this.routePersonaApi.get("/getname/:name", controllerFindNamePersona.callFindName);
    
        this.routePersonaApi.post("/add", controllerAddPersona.callAddPersona);
        this.routePersonaApi.put("/update", controllerUpdatePersona.callUpdatePersona);
        this.routePersonaApi.delete("/delete/:id", controllerDeleteCliente.callDeleteCliente);
    }
}

const routePersona = new RoutePersona();
export default routePersona.routePersonaApi;