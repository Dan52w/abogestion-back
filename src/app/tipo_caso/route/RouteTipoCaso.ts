import { Router } from "express";
import controllerFindAllTipoCaso from "../controller/ControllerFindAllTipoCaso";
import controllerAddTipoCaso from "../controller/ControllerAddTipoCaso";
import controllerUpdateTipoCaso from "../controller/ControllerUpdateTipoCaso";
import controllerDeleteTipoCaso from "../controller/ControllerDeleteTipoCaso";
import controllerFindNameTipoCaso from "../controller/ControllerFindNameTipoCaso";
import controllerFindIdTipoCaso from "../controller/ControllerFindIdTipoCaso";

class RouteTipoCaso{
    public routeTipoCasoApi: Router;

    constructor(){
        this.routeTipoCasoApi = Router();
    
        this.routeTipoCasoApi.get("/getall", controllerFindAllTipoCaso.callFindAll);
        this.routeTipoCasoApi.get("/getname/:name", controllerFindNameTipoCaso.findName);
        this.routeTipoCasoApi.get("/getid/:id", controllerFindIdTipoCaso.callFindId);
    
        this.routeTipoCasoApi.post("/add", controllerAddTipoCaso.callAddTipoCaso);
        this.routeTipoCasoApi.put("/update", controllerUpdateTipoCaso.callUpdateTipoCaso);
        this.routeTipoCasoApi.delete("/delete/:id", controllerDeleteTipoCaso.callDeleteTipoCaso);
    }
}

const routeTipoCaso = new RouteTipoCaso();
export default routeTipoCaso.routeTipoCasoApi;