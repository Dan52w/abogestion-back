import { Router } from "express";
import controllerFindAllTipoVinculacion from "../controller/ControllerFindAllTipoVinculacion";
import controllerAddTipoVinculacion from "../controller/ControllerAddTipoVinculacion";
import controllerUpdateTipoVinculacion from "../controller/ControllerUpdateTipoVinculacion";

class RouteTipoVinculacion {
    public routeTipoVinculacionApi: Router;

    constructor() {
        this.routeTipoVinculacionApi = Router();
    
        this.routeTipoVinculacionApi.get("/getall", controllerFindAllTipoVinculacion.callFindAll);
    
        this.routeTipoVinculacionApi.post("/add", controllerAddTipoVinculacion.callAddTipoVinculacion);
        this.routeTipoVinculacionApi.put("/update", controllerUpdateTipoVinculacion.callUpdateTipoVinculacion);
    }
}

const routeTipoVinculacion = new RouteTipoVinculacion();
export default routeTipoVinculacion.routeTipoVinculacionApi;