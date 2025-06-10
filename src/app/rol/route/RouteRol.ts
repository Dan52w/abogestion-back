import { Router } from "express";
import controllerFindAllRol from "../controller/ControllerFindAllRol";
import controllerAddRol from "../controller/ControllerAddRol";
import controllerUpdateRol from "../controller/ControllerUpdateRol";
import controllerFindNameRol from "../controller/ControllerFindNameRol";
import controllerFindIdRol from "../controller/ControllerFindIdRol";
import controllerDeleteRol from "../controller/ControllerDeleteRol";

class RouteRol {
    public routeRolApi: Router;

    constructor() {
        this.routeRolApi = Router();
    
        this.routeRolApi.get("/getall", controllerFindAllRol.callFindAll);
        this.routeRolApi.get("/getname/:name", controllerFindNameRol.callFindName);
        this.routeRolApi.get("/getid/:id", controllerFindIdRol.callFindId);
    
        this.routeRolApi.post("/add", controllerAddRol.callAddRol);
        this.routeRolApi.put("/update", controllerUpdateRol.callUpdateRol);
        this.routeRolApi.delete("/delete/:id", controllerDeleteRol.callDeleteRol)
    }
}

const routeRol = new RouteRol();
export default routeRol.routeRolApi;