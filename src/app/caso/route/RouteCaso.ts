import { Router } from "express";
import controllerFindAllCaso from "../controller/ControllerFindAllCaso";

class RouteCaso {
    public routeCasoApi : Router;

    constructor() {
        this.routeCasoApi = Router();
    
        this.routeCasoApi.get("/getall", controllerFindAllCaso.callFindAll);
    }
}

const routeCaso = new RouteCaso();
export default routeCaso.routeCasoApi;