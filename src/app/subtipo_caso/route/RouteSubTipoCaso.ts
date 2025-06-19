import { Router } from "express";
import controllerFindAllSubTipoCaso from "../controller/ControllerFindAllSubTipoCaso";
import controllerAddSubTipoCaso from "../controller/ControllerAddSubTipoCaso";
import controllerUpdateSubTipoCaso from "../controller/ControllerUpdateSubTipoCaso";

class RouteSubTipoCaso {
    public routeSubTipoCasoApi: Router;

    constructor() {
        this.routeSubTipoCasoApi = Router();
    
        this.routeSubTipoCasoApi.get("/getall", controllerFindAllSubTipoCaso.callFindAll);
    
        this.routeSubTipoCasoApi.post("/add", controllerAddSubTipoCaso.callAddSubTipoCaso);
        this.routeSubTipoCasoApi.put("/update", controllerUpdateSubTipoCaso.callUpdateSubTipoCaso);
    }
}

const routeSubTipoCaso = new RouteSubTipoCaso();
export default routeSubTipoCaso.routeSubTipoCasoApi;