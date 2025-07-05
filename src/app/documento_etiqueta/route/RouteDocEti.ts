import { Router } from "express";
import controllerFindAllDocEti from "../controller/ControllerFindAllDocEti";
import controllerAddDocEti from "../controller/ControllerAddDocEti";
import controllerDeleteDocEti from "../controller/ControllerDeleteDocEti";
import controllerDeleteCodDDocEti from "../controller/ContollerDeleteCodDDocEti";
import controllerFindCodDDocEti from "../controller/ControllerFindcodDDocEti";

class RouteDocEti {
    public routeDocEtiApi: Router;

    constructor() {
        this.routeDocEtiApi = Router();
    
        this.routeDocEtiApi.get("/getall", controllerFindAllDocEti.callFindAll);
        this.routeDocEtiApi.get("/getcd/:codDocumento", controllerFindCodDDocEti.callFindCodD);
    
        this.routeDocEtiApi.post("/add", controllerAddDocEti.callAddDocEti);
        this.routeDocEtiApi.delete("/delete", controllerDeleteDocEti.callDeleteDocEti);
        this.routeDocEtiApi.delete("/delete/:codDocumento", controllerDeleteCodDDocEti.callDeleteCodDocEti);
    }
}

const routeDocEti = new RouteDocEti();
export default routeDocEti.routeDocEtiApi;