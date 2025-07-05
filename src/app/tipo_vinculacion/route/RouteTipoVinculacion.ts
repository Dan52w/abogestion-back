import { Router } from "express";
import controllerFindAllTipoVinculacion from "../controller/ControllerFindAllTipoVinculacion";

class RouteTipoVinculacion {
    public routeTipoVinculacionApi: Router;

    constructor() {
        this.routeTipoVinculacionApi = Router();
    
        this.routeTipoVinculacionApi.get("/getall", controllerFindAllTipoVinculacion.callFindAll);
    }
}

const routeTipoVinculacion = new RouteTipoVinculacion();
export default routeTipoVinculacion.routeTipoVinculacionApi;