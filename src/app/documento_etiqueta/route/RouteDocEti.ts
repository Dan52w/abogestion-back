import { Router } from "express";
import controllerFindAllDocEti from "../controller/ControllerFindAllDocEti";
import controllerAddDocEti from "../controller/ControllerAddDocEti";

class RouteDocEti {
    public routeDocEtiApi: Router;

    constructor() {
        this.routeDocEtiApi = Router();
    
        this.routeDocEtiApi.get("/getall", controllerFindAllDocEti.callFindAll);
    
        this.routeDocEtiApi.post("/add", controllerAddDocEti.callAddDocEti);
    }
}

const routeDocEti = new RouteDocEti();
export default routeDocEti.routeDocEtiApi;