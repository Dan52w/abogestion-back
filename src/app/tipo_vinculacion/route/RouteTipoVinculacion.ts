import { Router } from "express";
import controllerFindAllTipoVinculacion from "../controller/ControllerFindAllTipoVinculacion";
import controllerAddTipoVinculacion from "../controller/ControllerAddTipoVinculacion";
import controllerUpdateTipoVinculacion from "../controller/ControllerUpdateTipoVinculacion";
import controllerDeleteTipoVinculacion from "../controller/ControllerDeleteTipoVinculacion";

class RouteTipoVinculacion {
    public routeTipoVinculacionApi: Router;

    constructor() {
        this.routeTipoVinculacionApi = Router();
    
        this.routeTipoVinculacionApi.get("/getall", controllerFindAllTipoVinculacion.callFindAll);
    
        this.routeTipoVinculacionApi.post("/add", controllerAddTipoVinculacion.callAddTipoVinculacion);
        this.routeTipoVinculacionApi.put("/update", controllerUpdateTipoVinculacion.callUpdateTipoVinculacion);
        this.routeTipoVinculacionApi.delete("/delete/:id", controllerDeleteTipoVinculacion.callDeleteTipoVinculacion);
    }
}

const routeTipoVinculacion = new RouteTipoVinculacion();
export default routeTipoVinculacion.routeTipoVinculacionApi;