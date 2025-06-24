import { Router } from "express";
import controllerFindAllSubTipoCaso from "../controller/ControllerFindAllSubTipoCaso";
import controllerAddSubTipoCaso from "../controller/ControllerAddSubTipoCaso";
import controllerUpdateSubTipoCaso from "../controller/ControllerUpdateSubTipoCaso";
import controllerFindNameSubTipoCaso from "../controller/ControllerFindNameSubTipoCaso";
import controllerDeleteSubTipoCaso from "../controller/ControllerDeleteSubTipoCaso";
import controllerFindTypeNameSubTipoCaso from "../controller/ControllerFindTypeNameSubTipoCaso";
import controllerFindIdSubTipoCaso from "../controller/ControllerFindIdSubTipoCaso";

class RouteSubTipoCaso {
    public routeSubTipoCasoApi: Router;

    constructor() {
        this.routeSubTipoCasoApi = Router();
    
        this.routeSubTipoCasoApi.get("/getall", controllerFindAllSubTipoCaso.callFindAll);
        this.routeSubTipoCasoApi.get("/getname/:name", controllerFindNameSubTipoCaso.callFindName);
        this.routeSubTipoCasoApi.get("/gettype/:name", controllerFindTypeNameSubTipoCaso.callFindTypeName);
        this.routeSubTipoCasoApi.get("/getid/:id", controllerFindIdSubTipoCaso.callFindId);
    
        this.routeSubTipoCasoApi.post("/add", controllerAddSubTipoCaso.callAddSubTipoCaso);
        this.routeSubTipoCasoApi.put("/update", controllerUpdateSubTipoCaso.callUpdateSubTipoCaso);
        this.routeSubTipoCasoApi.delete("/delete/:id", controllerDeleteSubTipoCaso.callDeleteSubTipoCoso);
    }
}

const routeSubTipoCaso = new RouteSubTipoCaso();
export default routeSubTipoCaso.routeSubTipoCasoApi;