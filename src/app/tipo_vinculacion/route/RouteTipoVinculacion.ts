import { Router } from "express";
import controllerFindAllTipoVinculacion from "../controller/ControllerFindAllTipoVinculacion";
import controllerAddTipoVinculacion from "../controller/ControllerAddTipoVinculacion";

class RouteTipoVinculacion {
    public routeTipoVinculacionApi: Router;

    constructor() {
        this.routeTipoVinculacionApi = Router();
    
        this.routeTipoVinculacionApi.get("/getall", controllerFindAllTipoVinculacion.callFindAll);
    
        this.routeTipoVinculacionApi.post("/add", controllerAddTipoVinculacion.callAddTipoVinculacion);
    }
}

const routeTipoVinculacion = new RouteTipoVinculacion();
export default routeTipoVinculacion.routeTipoVinculacionApi;