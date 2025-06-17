import { Router } from "express";
import controllerFindAllTipoCaso from "../controller/ControllerFindAllTipoCaso";
import controllerAddTipoCaso from "../controller/ControllerAddTipoCaso";
import controllerUpdateTipoCaso from "../controller/ControllerUpdateTipoCaso";

class RouteTipoCaso{
    public routeTipoCasoApi: Router;

    constructor(){
        this.routeTipoCasoApi = Router();
    
        this.routeTipoCasoApi.get("/getall", controllerFindAllTipoCaso.callFindAll);
    
        this.routeTipoCasoApi.post("/add", controllerAddTipoCaso.callAddTipoCaso);
        this.routeTipoCasoApi.put("/update", controllerUpdateTipoCaso.callUpdateTipoCaso);
    }
}

const routeTipoCaso = new RouteTipoCaso();
export default routeTipoCaso.routeTipoCasoApi;