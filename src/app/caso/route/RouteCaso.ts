import { Router } from "express";
import controllerFindAllCaso from "../controller/ControllerFindAllCaso";
import controllerAddCaso from "../controller/ControllerAddCaso";
import controllerUpdateCaso from "../controller/ControllerUpdateCaso";

class RouteCaso {
    public routeCasoApi : Router;

    constructor() {
        this.routeCasoApi = Router();
    
        this.routeCasoApi.get("/getall", controllerFindAllCaso.callFindAll);
    
        this.routeCasoApi.post("/add", controllerAddCaso.callAddCaso);
        this.routeCasoApi.put("/update", controllerUpdateCaso.callUpdateCaso);
    }
}

const routeCaso = new RouteCaso();
export default routeCaso.routeCasoApi;