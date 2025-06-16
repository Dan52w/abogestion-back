import { Router } from "express";
import controllerFindAllPRoles from "../controller/ControllerFindAllPRoles";
import controllerAddPRoles from "../controller/ControllerAddPRoles";

class RoutePRoles {
    public routaPRolesApi: Router;

    constructor() {
        this.routaPRolesApi = Router();
    
        this.routaPRolesApi.get("/getall", controllerFindAllPRoles.callFindAll);
    
        this.routaPRolesApi.post("/add", controllerAddPRoles.callAddPRoles);
    }
}

const routaPRoles = new RoutePRoles();
export default routaPRoles.routaPRolesApi;