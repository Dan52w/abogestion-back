import { Router } from "express";
import controllerFindAllDocEti from "../controller/ControllerFindAllDocEti";

class RouteDocEti {
    public routeDocEtiApi: Router;

    constructor() {
        this.routeDocEtiApi = Router();
    
        this.routeDocEtiApi.get("/getall", controllerFindAllDocEti.callFindAll);
    }
}

const routeDocEti = new RouteDocEti();
export default routeDocEti.routeDocEtiApi;