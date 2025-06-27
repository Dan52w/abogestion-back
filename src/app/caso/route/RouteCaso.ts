import { Router } from "express";
import controllerFindAllCaso from "../controller/ControllerFindAllCaso";
import controllerAddCaso from "../controller/ControllerAddCaso";
import controllerUpdateCaso from "../controller/ControllerUpdateCaso";
import controllerDeleteCaso from "../controller/ControllerDeleteCaso";
import controllerFindIdCaso from "../controller/ControllerFindIdCaso";

class RouteCaso {
    public routeCasoApi : Router;

    constructor() {
        this.routeCasoApi = Router();
    
        this.routeCasoApi.get("/getall", controllerFindAllCaso.callFindAll);
        this.routeCasoApi.get("/getid/:id", controllerFindIdCaso.callFindId);
    
        this.routeCasoApi.post("/add", controllerAddCaso.callAddCaso);
        this.routeCasoApi.put("/update", controllerUpdateCaso.callUpdateCaso);
        this.routeCasoApi.delete("/delete/:id", controllerDeleteCaso.callDeleteUpdate);
    }
}

const routeCaso = new RouteCaso();
export default routeCaso.routeCasoApi;