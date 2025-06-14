import { Router } from "express";
import controllerFindAllPersona from "../controller/ControllerFindAllPersona";

class RoutePersona {
    public routePersonaApi: Router;

    constructor() {
        this.routePersonaApi = Router();
    
        this.routePersonaApi.get("/getall", controllerFindAllPersona.callFindAll);
    }
}

const routePersona = new RoutePersona();
export default routePersona.routePersonaApi;