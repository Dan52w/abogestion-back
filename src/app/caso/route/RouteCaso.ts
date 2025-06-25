import { Router } from "express";
import controllerFindAllCaso from "../controller/ControllerFindAllCaso";
import controllerAddCaso from "../controller/ControllerAddCaso";

class RouteCaso {
    public routeCasoApi : Router;

    constructor() {
        this.routeCasoApi = Router();
    
        this.routeCasoApi.get("/getall", controllerFindAllCaso.callFindAll);
    
        this.routeCasoApi.post("/add", controllerAddCaso.callAddCaso);
    }
}

const routeCaso = new RouteCaso();
export default routeCaso.routeCasoApi;