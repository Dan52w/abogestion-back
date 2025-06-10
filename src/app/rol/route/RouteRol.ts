import { Router } from "express";
import controllerFindAllRol from "../controller/ControllerFindAllRol";

class RouteRol {
    public routeRolApi: Router;

    constructor() {
        this.routeRolApi = Router();
    
        this.routeRolApi.get("/getall", controllerFindAllRol.callFindAll);
    }
}

const routeRol = new RouteRol();
export default routeRol.routeRolApi;