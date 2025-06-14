import { Router } from "express";
import controllerFindAllPersona from "../controller/ControllerFindAllPersona";
import controllerAddPersona from "../controller/ControllerAddPersona";

class RoutePersona {
    public routePersonaApi: Router;

    constructor() {
        this.routePersonaApi = Router();
    
        this.routePersonaApi.get("/getall", controllerFindAllPersona.callFindAll);
    
        this.routePersonaApi.post("/add", controllerAddPersona.callAddPersona);
    }
}

const routePersona = new RoutePersona();
export default routePersona.routePersonaApi;