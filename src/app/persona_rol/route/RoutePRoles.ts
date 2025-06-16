import { Router } from "express";
import controllerFindAllPRoles from "../controller/ControllerFindAllPRoles";

class RoutePRoles {
    public routaPRolesApi: Router;

    constructor() {
        this.routaPRolesApi = Router();
    
        this.routaPRolesApi.get("/getall", controllerFindAllPRoles.callFindAll);
    }
}

const routaPRoles = new RoutePRoles();
export default routaPRoles.routaPRolesApi;