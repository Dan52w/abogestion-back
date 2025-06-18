import { Router } from "express";
import controllerFindAllSubTipoCaso from "../controller/ControllerFindAllSubTipoCaso";

class RouteSubTipoCaso {
    public routeSubTipoCasoApi: Router;

    constructor() {
        this.routeSubTipoCasoApi = Router();
    
        this.routeSubTipoCasoApi.get("/getall", controllerFindAllSubTipoCaso.callFindAll);
    }
}

const routeSubTipoCaso = new RouteSubTipoCaso();
export default routeSubTipoCaso.routeSubTipoCasoApi;