import { Router } from "express";
import controllerFindAllPRoles from "../controller/ControllerFindAllPRoles";
import controllerAddPRoles from "../controller/ControllerAddPRoles";
import controllerDeletePRoles from "../controller/ControllerDeletePRoles";
import controllerFindPersonaPRoles from "../controller/ControllerFindPersonaPRoles";

class RoutePRoles {
    public routaPRolesApi: Router;

    constructor() {
        this.routaPRolesApi = Router();
    
        this.routaPRolesApi.get("/getall", controllerFindAllPRoles.callFindAll);
        this.routaPRolesApi.get("/getperid/:id", controllerFindPersonaPRoles.callFindPersona);
    
        this.routaPRolesApi.post("/add", controllerAddPRoles.callAddPRoles);
        this.routaPRolesApi.delete("/delete/:id", controllerDeletePRoles.callDeletePRoles);
    }
}

const routaPRoles = new RoutePRoles();
export default routaPRoles.routaPRolesApi;